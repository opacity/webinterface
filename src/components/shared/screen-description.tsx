import styled from "styled-components";

import { DESKTOP_WIDTH } from "../../config";

const ScreenDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  padding: 0;
  margin-bottom: 60px;
  width: 460px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    width: auto;
    margin-bottom: 20px;
  }
`;

export default ScreenDescription;
