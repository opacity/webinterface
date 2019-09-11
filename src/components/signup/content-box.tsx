import styled from "styled-components";

import { MOBILE_WIDTH } from "../../config";

export default styled.div`
  background-color: ${props => props.theme.container.background};
  margin: 0 auto;
  max-width: 452px;
  padding: 20px 80px;
  width: 100%;
  min-height: 292px;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 20px;
    width: auto;
  }
`;
