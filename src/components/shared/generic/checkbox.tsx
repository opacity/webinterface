import styled from "styled-components";
import { DESKTOP_WIDTH } from "../../../config";

const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  background-color: ${(props: any) => props.backgroundColor || ""};
  color: ${(props: any) => props.color || ""};
  border: ${(props: any) => props.border || "none"};
  border-radius: ${(props: any) => props.borderRadius || "0px"};
  font: ${(props: any) => props.font || ""};
  height: ${(props: any) => props.height || "auto"};
  margin: ${(props: any) => props.margin || "0px 10px 0px 0px"};
  min-width: ${(props: any) => props.minWidth || ""};
  outline: ${(props: any) => props.outline || "none"};
  padding: ${(props: any) => props.padding || "auto"};
  width: ${(props: any) => props.width || "auto"};
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    height: 20px;
    width: 20px;
    position: relative;
    top: 5px;
  }
`;

export default Checkbox;
