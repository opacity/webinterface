import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Reaptcha from "reaptcha";

import { RECAPTCHA_SITEKEY, DESKTOP_WIDTH, theme } from "../../config";

import ContentBox from "./content-box";
import Content from "./content";
import Hr from "./hr";
import OutboundLink from "../shared/outbound-link";
import Title from "./title";
import ContinueButton from "./continue-button";
import Checkbox from "../shared/generic/checkbox";

const ContinueButtonLink = styled(Link)`
  color: ${(props: any) => theme.button.color};
  border: 1px solid white;
  border-radius: 0px;
  cursor: pointer;
  margin: 0xp;
  min-width: 100px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => theme.button.background};
  border: none;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  width: 171px;
  text-decoration: none;
  padding: 10px;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
  text-transform: uppercase;
`;

const CaptchaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DownloadButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => props.theme.link.color};
  cursor: pointer;
  font-size: 16px;
`;

const TermsOfService = styled.div`
  margin: 10px 0;
  text-align: right;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  margin-top: -5px;
  color: ${props => props.theme.container.content};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px)
    text-align: center;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  align-items: center;
  background-color: ${props => props.theme.password.background};
  color: #ffffff;
  display: flex;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  margin: 10px;
  height: 25px;
  width: 125px;
`;

const RecordRecoveryPhraseSlide = ({ next, mnemonic, history, isCustom }) => {
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(true);

  const onSubmit = () => {
    if (!isTermsChecked) {
      alert("Please accept the Terms of Service");
    } else {
      next();
    }
  };

  const downloadCsv = array => {
    const csvContent = array.join(",");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = "mnemonic.csv";
    window.document.body.appendChild(elem);
    elem.click();
    window.document.body.removeChild(elem);
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentBox>
        <Title>IMPORTANT: Save Your Account Handle Recovery Phrase</Title>
        <Hr />
        <Content>
          Your Opacity Account Handle is the key to your account. If you lose
          the key, the 12 recovery words below will help you recover the key.
          Record these words now and keep them in a safe place. These words will
          allow anyone to recover your Account Handle and possibly enable access
          to your storage account. They should not be shared with anyone that
          you do not wish to have access to your data.
        </Content>
        <ContentBold>
          Your privacy and security is in your hands. Keep these recovery words
          safe.
        </ContentBold>
        <Grid>
          {mnemonic.map((word, i) => (
            <Box key={i}>
              {i + 1}. {word}
            </Box>
          ))}
        </Grid>
        <DownloadButton onClick={() => downloadCsv(mnemonic)}>
          Download phrase as CSV
        </DownloadButton>
        <ButtonWrapper>
          <ContinueButtonLink to={`/${isCustom ? "custom-" : ""}sign-up`}>
            Back
          </ContinueButtonLink>
          <ContinueButton
            disabled={!isCaptchaVerified}
            onClick={() => onSubmit()}
          >
            Continue
          </ContinueButton>
        </ButtonWrapper>
        <TermsOfService>
          <CheckboxLabel htmlFor="terms-checkbox">
            <Checkbox
              id="terms-checkbox"
              value="checked"
              onChange={e => setIsTermsChecked(e.target.checked)}
              checked={isTermsChecked}
            />
            I agree to the{" "}
            <OutboundLink href="/terms-of-service">
              Terms of Service
            </OutboundLink>{" "}
            and{" "}
            <OutboundLink href="/privacy-policy">Privacy Policy</OutboundLink>
          </CheckboxLabel>
        </TermsOfService>
        <CaptchaWrapper>
          <Reaptcha
            sitekey={RECAPTCHA_SITEKEY}
            onVerify={() => setIsCaptchaVerified(true)}
          />
        </CaptchaWrapper>
      </ContentBox>
    </ThemeProvider>
  );
};

export default withRouter(RecordRecoveryPhraseSlide);
