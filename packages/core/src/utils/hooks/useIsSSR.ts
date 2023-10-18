import { useEffect, useState } from "react";

/**
 * Determine if React is rendered in a client or server environment.
 */
export const useIsSSR = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR;
};
