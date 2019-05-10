import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Mnemonic from "bitcore-mnemonic";

import { theme, DESKTOP_WIDTH } from "../../config";

import ContentBox from "./content-box";
import Content from "./content";
import Hr from "./hr";
import OutboundLink from "../shared/outbound-link";
import Title from "./title";
import ContinueButton from "./continue-button";
import Checkbox from "../shared/generic/checkbox";

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
  text-transform: uppercase;
`;

const DownloadButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => props.theme.link.color};
  cursor: pointer;
`;

const TermsOfService = styled.div`
  margin: 10px 0;
  text-align: right;
`;

const CheckboxLabel = styled.label`
  margin-top: -5px;
  color: ${props => props.theme.container.content};
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 25px 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px)
    text-align: center;
  }
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-rows: repeat(4, 28px);
  margin-bottom: 30px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    grid-template-rows: repeat(6, 28px);
  }
`;

const Box = styled.div`
  align-items: center;
  background-color: ${props => props.theme.password.background};
  color: #ffffff;
  display: flex;
  font-size: 12px;
  justify-content: center;
  text-align: center;
`;

interface RecordRecoveryPhraseProps {
  setPrivateKey;
}

interface RecordRecoveryPhraseState {
  mnemonic;
  privateKey;
  isTermsChecked;
}

class RecordRecoveryPhraseSlide extends Component<
  RecordRecoveryPhraseProps,
  RecordRecoveryPhraseState
> {
  state = {
    mnemonic: [],
    privateKey: "",
    isTermsChecked: false
  };

  downloadCsv (array) {
    const csvContent = array.join(",");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = "opacity-mnenomic.csv";
    window.document.body.appendChild(elem);
    elem.click();
    window.document.body.removeChild(elem);
  }

  save (privateKey) {
    const { setPrivateKey } = this.props;
    setPrivateKey(privateKey);
  }

  componentDidMount () {
    const code = new Mnemonic();
    this.setState({
      mnemonic: code.toString().split(" "),
      privateKey: code.toHDPrivateKey().xprivkey // TODO: find out what the backend needs
    });
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <ContentBox>
          <Title>IMPORTANT: Save Your Account Handle Recovery Phrase</Title>
          <Hr />
          <Content>
            Your Opacity Account Handle is the key to your account. If you lose
            the key, the 12 recovery words below will help you recover the key.
            Record these words now and keep them in a safe place. These words
            will allow anyone to recover your Account Handle and possibly enable
            access to your storage account. They should not be shared with
            anyone that you do not wish to have access to your data.
          </Content>
          <ContentBold>
            Your privacy and security is in your hands. Keep these recovery
            words safe.
          </ContentBold>
          <Grid>
            {this.state.mnemonic.map((word, i) => (
              <Box key={i}>
                {i + 1}. {word}
              </Box>
            ))}
          </Grid>
          <DownloadButton onClick={() => this.downloadCsv(this.state.mnemonic)}>
            Download phrase as CSV
          </DownloadButton>
          <ButtonWrapper>
            <ContinueButton
              onClick={() => {
                const { isTermsChecked } = this.state;

                isTermsChecked
                  ? this.save(this.state.privateKey)
                  : alert("Please accept the Terms of Service");
              }}
            >
              Continue
            </ContinueButton>
          </ButtonWrapper>
          <TermsOfService>
            <CheckboxLabel htmlFor="terms-checkbox">
              <Checkbox
                id="terms-checkbox"
                value="checked"
                onChange={e =>
                  this.setState({ isTermsChecked: e.target.checked })
                }
                checked={this.state.isTermsChecked}
              />
              I agree to the{" "}
              <OutboundLink href="/terms-of-service">
                Terms of Service
              </OutboundLink>
            </CheckboxLabel>
          </TermsOfService>
        </ContentBox>
      </ThemeProvider>
    );
  }
}

export default RecordRecoveryPhraseSlide;
