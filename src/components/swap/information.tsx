import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import {
  HEADER_TYPES,
  theme
} from "../../config";

import Header from "../shared/header";
import ScreenContainer from "../shared/screen-container";

const Container = styled.div`
  width: 100%;
`;

const SwapContainer = styled(ScreenContainer)``;

const ButtonLink = styled(Link)`
  min-width: 120px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  text-decoration: none;
  padding: 0 10px;
  border: none;
  cursor: pointer;

  &:disabled, &[disabled] {
    pointer-events: none;
    opacity: .5;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.5em;
`;

const SwapInformation = () => {
  const [tcChecked, setTcChecked] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />

        <SwapContainer title="Welcome to the OPQ to OPCT Token Swap Official Portal!">
          <div>
            <Subtitle>OPCT Swap Official End Date: January 1, 2021.</Subtitle>
            <h4>Introduction</h4>
            <p>Opacity is exchanging the OPQ token to a new token with symbol OPCT. This new token will be used to pay for storage services on <a href="https://opacity.io/">opacity.io</a> and replace OPQ in all things supported by Opacity. Our primary exchanges Kucoin and Mercatox will no longer support OPQ. OPCT will become the new token of record. All existing OPQ will be burned as much as possible and will become obsolete as payment on our platform. The swap will be available until the end of this year 2020 and expire on January 1, 2021. You must perform your swap before January 1, 2021 to exchange your OPQ for OPCT. All claims after that date will not be honored.</p>
            <h4>Why are we doing this?</h4>
            <p>When Opacity discussed listing with the decentralized exchange Idex, it was found that there was an issue in the OPQ ERC-20 contract that was launched by the original team in November 2018 which would prevent the listing. Unfortunately, directly changing the OPQ contract was not possible since it is locked and replacing it with a new contract was the only option. Replacing old code via forks, airdrops, and swaps has become a common occurrence in crypto. You can read more about the basics of token swaps <a href="https://cryptalker.com/coin-swap/" target="_blank">here</a>.</p>
            <p>The OPQ contract bug is in the token transfer function. As stated by the Uniswap support team: “the token returns a boolean from transferFrom but not transfer, meaning it’s possible for smart contracts to pull tokens but not return them”</p>
            <p>You can see this in the <a href="https://etherscan.io/address/0x77599d2c6db170224243e255e6669280f11f1473#code" target="_blank">contract code</a> on the blockchain. Line 281 contains the issue regarding the transfer function:</p>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              <code>function transfer(address _to, uint256 _value) public {"{\n"}</code>
              <code>{"  "}_transfer(msg.sender, _to, _value);{"\n"}</code>
              <code>}{"\n"}</code>
            </pre>
            <h4>What do I need to do?</h4>
            <p>The swap page will help you send the required transactions via web3. When you first navigate to the page, your web3 provider will prompt you to connect your Ethereum account to the page. After connecting, the buttons on the page will prompt you to send the transactions required for the swap. If you see two checkmarks, your tokens have been swapped. Open your wallet and verify that your balance has been converted.</p>
            <h4>Which wallets are supported?</h4>
            <p>This service supports web3 compatible wallets which include MetaMask, MEW, and hardware wallets like Ledger.</p>
            <h4>What if I’m using another wallet?</h4>
            <p>If you're using another wallet you'll need to perform the token swap manually.</p>
            <h4>What happens to the old OPQ?</h4>
            <p>OPQ exchanged in this swap will be burned and removed from existence. It will no longer be supported by Kucoin or Mercatox and no longer accepted by Opacity as payment for storage accounts. OPQ is obsolete.</p>
            <h4>Now, read this very important note before you swap!</h4>
            <p>Payment using OPCT is not yet supported on opacity.io. If you anticipate a need to renew or create an account in the near future, we suggest you do so immediately using OPQ before executing the swap. The swap may cause you to lose access to your account since you will not have OPQ to pay until we can enable the new OPCT payment method.</p>
            <h4>What if I’m having trouble?</h4>
            <p>Remember, this is crypto! Ultimately, you are solely responsible for handling your funds and your tokens. Opacity is providing a service to enable replacing the old token with the new token that we will accept as payment for storage accounts on opacity.io. We will provide as much assistance as we can to use this service, but can not guarantee your use of this service will be without fault. Please review the <a href="https://www.opacity.io/terms-of-service">terms of service</a> to be sure this is clear.</p>
            <h4>Opacity Contact</h4>
            <p>Join us: <a href="https://t.me/OpacityStorage" target="_blank">Opacity Telegram</a></p>
            <p>Follow us: <a href="https://t.me/OpacityNews" target="_blank">Opacity Announcement Channel</a> | <a href="https://twitter.com/Opacity_Storage" target="_blank">Twitter</a> | <a href="https://www.reddit.com/r/Opacity/" target="_blank">Reddit</a> | <a href="http://www.youtube.com/opacitystorage" target="_blank">YouTube</a> | <a href="https://www.facebook.com/opacitystorage">Facebook</a> | <a href="https://www.instagram.com/opacitystorage/">Instagram</a></p>
            <p>Buy OPCT: <a href="https://www.kcs.top/ucenter/signup?rcode=Jc812M&lang=en_US" target="_blank">Kucoin</a> | <a href="http://www.mercatox.com/" target="_blank">Mercatox</a></p>
            <div>
              <ButtonLink to="./swap" disabled={!tcChecked}>Automatic Swap</ButtonLink>
              <span style={{ display: "inline-block", width: 20 }}></span>
              <ButtonLink to="./swap-manual" disabled={!tcChecked}>Manual Swap Information</ButtonLink>
            </div>
            <div>
              <label>
                <input type="checkbox" onChange={e => { setTcChecked(e.target.checked); }} />
                <span>I agree to the <a href="https://www.opacity.io/terms-of-service">Opacity Terms of Service</a></span>
              </label>
            </div>
            <p>Use of this service is subject to the <a href="https://www.opacity.io/terms-of-service">Opacity Terms of Service</a>. Please review the terms and conditions and confirm you accept them by selecting this box.</p>
          </div>
        </SwapContainer>
      </Container>
    </ThemeProvider>
  );
};

export default SwapInformation;
