import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Mnemonic from "bitcore-mnemonic";

import { theme, DESKTOP_WIDTH } from "../../config";

import ContentBox from "./content-box";
import Title from "./title";

const Hr = styled.div`
  width: ${props => props.theme.container.title.underline.width}px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 30px;
  width: 40px;
`;

const Content = styled.p`
  color: ${props => props.theme.container.content};
  font-size: 12px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: ${props => props.theme.fontWeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  width: auto;
`;

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
`;

const DownloadButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => props.theme.link.color};
  cursor: pointer;
`;

const ContinueButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  font-size: 16px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  height: 40px;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin: auto;
  text-align: center;
  width: 171px;

  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
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
}

class RecordRecoveryPhraseSlide extends Component<
  RecordRecoveryPhraseProps,
  RecordRecoveryPhraseState
> {
  state = {
    mnemonic: [],
    privateKey: ""
  };

  downloadCsv(array) {
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

  save(privateKey) {
    const { setPrivateKey } = this.props;
    setPrivateKey(privateKey);
  }

  componentDidMount() {
    const code = new Mnemonic();
    this.setState({
      mnemonic: code.toString().split(" "),
      privateKey: code.toHDPrivateKey().xprivkey // TODO: find out what the backend needs
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ContentBox>
          <Title>Record Recovery Phrase</Title>
          <Hr />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
            vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
            tristique ac magna sed. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut ac massa vestibulum, vestibulum nunc in,
            imperdiet
          </Content>
          <ContentBold>
            Phaugue. Phasellus nisl est, tristique ac magna sed:
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
            <ContinueButton onClick={() => this.save(this.state.privateKey)}>
              Continue
            </ContinueButton>
          </ButtonWrapper>
        </ContentBox>
      </ThemeProvider>
    );
  }
}

export default RecordRecoveryPhraseSlide;
