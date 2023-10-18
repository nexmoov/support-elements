import { css, styled } from "styled-components";
import { theme } from "../../styles";
import { type ColorTheme, FontWeightTheme } from "../../styles/themes/types";

interface TextProps {
  $variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption1" | "caption2";
  $align?: "left" | "center" | "right";
  $color: keyof ColorTheme | string;
  $lineClamp?: number;
  $weight: keyof FontWeightTheme;
  $family: "sans-serif" | "mono";
  $fontVariant: "small-caps" | "normal" | "inherit" | "initial";
  $letterSpacing?: string;
  $textTransform: "capitalize" | "uppercase" | "lowercase" | "none";
}

const getFontSize = ({ $variant }: TextProps) => {
  if ($variant === "h1") return theme["--ll-font-size-h1"];
  if ($variant === "h2") return theme["--ll-font-size-h2"];
  if ($variant === "h3") return theme["--ll-font-size-h3"];
  if ($variant === "h4") return theme["--ll-font-size-h4"];
  if ($variant === "h5") return theme["--ll-font-size-h5"];
  if ($variant === "h6") return theme["--ll-font-size-h6"];
  if ($variant === "p") return theme["--ll-font-size-p"];
  if ($variant === "caption1") return theme["--ll-font-size-caption-1"];
  if ($variant === "caption2") return theme["--ll-font-size-caption-2"];

  return theme["--ll-font-size-h2"];
};

const getColor = ({ $color }: TextProps) => {
  if ($color in theme) {
    return theme[$color as keyof ColorTheme];
  }

  return $color;
};

export const TextWrap = styled.span<{ $noMargin?: boolean; $lineHeight?: number }>`
  overflow: hidden;
  display: inline-block;
  width: 100%;
  line-height: ${({ $lineHeight }) => $lineHeight || 1.45};
  margin: 0 0 ${({ $noMargin }) => ($noMargin ? "0" : "0.5em")} 0;
  font-size: inherit;
  font-weight: inherit;
`;

export const Text = styled.div<TextProps>`
  ${(props) => css`
    text-align: ${props.$align};
    font-size: ${getFontSize(props)};
    font-family: ${props.$family === "sans-serif"
      ? theme["--ll-font-family"]
      : theme["--ll-font-family-mono"]};
    font-variant: ${props.$fontVariant};
    letter-spacing: ${props.$letterSpacing};
    color: ${getColor(props)};
    font-weight: ${theme[props.$weight]};
    text-transform: ${props.$textTransform};
    overflow: hidden;
    display: flex;

    svg {
      height: ${getFontSize(props)};
      fill: ${getColor(props)};
    }

    ${TextWrap} {
      ${props.$lineClamp &&
      css`
        ${props.$lineClamp === 1
          ? `
              white-space: nowrap;
            `
          : `
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: ${props.$lineClamp};
            `}
        overflow: hidden;
        text-overflow: ellipsis;
      `}
    }
  `}
`;
