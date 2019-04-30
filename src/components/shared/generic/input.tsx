import styled from "styled-components";
import { theme, MOBILE_WIDTH } from "../../../config";

const Input = styled.input.attrs({
  type: "text"
})`
  background-color: ${(props: any) => props.backgroundColor || "transparent"};
  color: ${(props: any) => props.color || ""};
  border: ${(props: any) =>
    props.border || "1px solid ".concat(theme.input.border.color)};
  border-radius: ${(props: any) => props.borderRadius || "0px"};
  cursor: ${(props: any) => props.cursor || "pointer"};
  font: ${(props: any) => props.font || ""};
  height: ${(props: any) => props.height || "auto"};
  margin: ${(props: any) => props.margin || "0px"};
  min-width: ${(props: any) => props.minWidth || ""};
  outline: ${(props: any) => props.outline || "none"};
  padding: ${(props: any) => props.padding || "10px"};
  width: ${(props: any) => props.width || "80%"};

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 90%;
  }
`;

export default Input;
