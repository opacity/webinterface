import styled from "styled-components";
import Button from "../shared/generic/button";
import { theme, DESKTOP_WIDTH } from "../../config";

export default styled(Button)`
  text-transform: uppercase;
  background-color: ${props => theme.button.background};
  border: none;
  margin: auto;
  text-align: center;
  width: 171px;
  &:disabled {
    background-color: ${props => theme.button.disabled.background};
    color: ${props => theme.button.disabled.color};
    border: ${props => theme.button.disabled.border};
  }

  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;
