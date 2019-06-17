import styled from "styled-components";
import Button from "../shared/generic/button";
import { theme, DESKTOP_WIDTH } from "../../config";

export default styled(Button)`
  background-color: ${props => theme.button.background};
  border: none;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  width: 171px;
  &:disabled {
    background-color: ${props => theme.button.disabled.background};
    border: ${props => theme.button.disabled.border};
    color: ${props => theme.button.disabled.color};
    cursor: not-allowed;
  }

  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;
