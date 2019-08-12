import styled from "styled-components";

import { theme } from "../../../config";

interface ButtonProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  margin?: string;
  width?: string;
  padding?: string;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-block;
  background-color: ${(props: any) => props.backgroundColor || "#2e6dde"};
  color: ${(props: any) => props.color || theme.button.color};
  border: ${(props: any) => props.border || "1px solid white"};
  border-radius: ${(props: any) => props.borderRadius || "0px"};
  cursor: ${(props: any) => props.cursor || "pointer"};
  font: ${(props: any) => props.font || ""};
  height: ${(props: any) => props.height || "40px"};
  margin: ${(props: any) => props.margin || "0px"};
  min-width: ${(props: any) => props.minWidth || "100px"};
  outline: ${(props: any) => props.outline || "none"};
  padding: ${(props: any) => props.padding || 0};
  width: ${(props: any) => props.width || "120px"};
  font-size: ${(props: any) => props.fontSize || "16px"};
  font-weight: ${(props: any) => props.fontWeight || "bold"};
  font-style: ${(props: any) => props.fontStyle || theme.fontStyle};
  font-stretch: ${(props: any) => props.fontStretch || theme.fontStretch};
  line-height: ${(props: any) => props.lineHeight || theme.lineHeight};
  letter-spacing: ${(props: any) => props.letterSpacing || theme.letterSpacing};

  &:disabled {
    pointer-events: none;
    cursor: default;
    background-color: #dfdfdf;
    color: #4f5e78;
    border: 1px solid #4f5e78;
  }
`;

export default Button;
