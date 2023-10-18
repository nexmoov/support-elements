import { useState, useRef, useEffect, useMemo, useCallback } from "react";

/**
 * Based on https://github.com/radix-ui/primitives/blob/8f75e5be679b9c269638bddf532a166d80edecb4/packages/react/use-controllable-state/src/useControllableState.tsx#L12
 */

interface ControllableStateProps<T, U> {
  controlledValue?: T;
  defaultValue?: T;
  onChange?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func?: ({ type, data }: { type: U; data: any }) => void;
    key: U;
  };
}

type SetStateFn<T> = (prevState?: T) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useCallbackRef = <T extends (...args: any[]) => any>(
  callback: T | undefined
): T => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
};

const useUncontrolledState = <T, U>({
  defaultValue,
  onChange,
}: Omit<ControllableStateProps<T, U>, "prop">) => {
  const uncontrolledState = useState<T>(defaultValue as T);
  const [value] = uncontrolledState;
  const prevValueRef = useRef(value);
  const handleChange = useCallbackRef(onChange?.func);

  useEffect(() => {
    if (prevValueRef.current !== value && onChange) {
      handleChange({ type: onChange.key, data: value });
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);

  return uncontrolledState;
};

const useControllableState = <T, U>({
  controlledValue,
  onChange,
  defaultValue,
}: ControllableStateProps<T, U>): [
  T,
  React.Dispatch<React.SetStateAction<T>>
] => {
  const [uncontrolledValue, setUncontrolledValue] = useUncontrolledState({
    defaultValue,
    onChange,
  });
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const handleChange = useCallbackRef(onChange?.func);

  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue as SetStateFn<T>;
        const v =
          typeof nextValue === "function" ? setter(controlledValue) : nextValue;
        if (v !== controlledValue && onChange)
          handleChange({ type: onChange.key, data: v });
      } else {
        setUncontrolledValue(nextValue as T);
      }
    },
    [isControlled, value, setUncontrolledValue, handleChange]
  );

  return [value, setValue];
};

export default useControllableState;
