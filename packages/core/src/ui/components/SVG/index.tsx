import React from "react";
import { styled } from "styled-components";

interface SVGProps {
  SVGElement: React.FC | string;
  fill?: string;
  width?: number;
  height?: number;
}

const StyledSVG = styled.div<
  NonNullable<{
    fill: string;
    width: number;
    height: number;
  }>
>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  fill: ${({ fill }) => fill};
  display: flex;

  & > svg {
    fill: inherit;
    height: 100%;
    width: 100%;
  }
`;

export const SVG = ({
  SVGElement,
  fill = "--ll-color-on-background",
  height = 24,
  width = 24,
}: SVGProps) => (
  <StyledSVG fill={fill} height={height} width={width}>
    <SVGElement />
  </StyledSVG>
);
