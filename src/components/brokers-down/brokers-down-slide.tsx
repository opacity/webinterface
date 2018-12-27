import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const Link = styled.a`
  color: #846b99;
  font-weight: 600;
`;

const BrokersDownSlide = () => (
  <ScreenContainer title={"Broker Nodes Offline"}>
    <ScreenDescription>
      Opacity Storage’s broker nodes are currently offline. Uploads are
      unavailable at this time. Please visit our{" "}
      <Link href="https://t.me/OpacityStorage">Telegram Channel</Link> for more
      information. We apologize for the inconvenience.
    </ScreenDescription>
  </ScreenContainer>
);

export default BrokersDownSlide;
