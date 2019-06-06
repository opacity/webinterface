import styled from "styled-components";
import { theme } from "../../../config";

const Textarea = styled.textarea`
  background-color: ${(props: any) => props.backgroundColor || "transparent"};
  color: ${(props: any) => props.color || ""};
  border: ${(props: any) =>
    props.border || "1px solid ".concat(theme.input.border.color)};
  border-radius: ${(props: any) => props.borderRadius || "0px"};
  cursor: ${(props: any) => props.cursor || "pointer"};
  font: ${(props: any) => props.font || ""};
  height: ${(props: any) => props.height || "150px;"};
  margin: ${(props: any) => props.margin || "0px"};
  min-width: ${(props: any) => props.minWidth || ""};
  outline: ${(props: any) => props.outline || "none"};
  padding: ${(props: any) => props.padding || "10px"};
  width: ${(props: any) => props.width || "100%"};
`;

export default Textarea;
