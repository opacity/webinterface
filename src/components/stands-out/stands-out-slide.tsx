import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";

const ICON_INTRO = require("../../assets/images/intro.svg");
const ICON_ACCESS_ACCOUNT = require("../../assets/images/access_account.svg");
const ICON_ENCRYPTED = require("../../assets/images/encrypted.svg");
const ICON_LASTPASS = require("../../assets/images/last_pass.svg");
const ICON_1PASSWORD = require("../../assets/images/1password.svg");
const ICON_KEEPASS = require("../../assets/images/kee_pass.svg");
const ICON_BIT = require("../../assets/images/bit.svg");

const ContainerWrapper = styled.div``;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  text-align: center;
  margin-top: 100px;
`;

const HeaderTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  text-align: center;
  margin-bottom: 20px;
`;

const TitleFunction = styled(HeaderTitle)`
  font-size: 18px;
  margin: 52px 20px 26px 50px;
  width: 230px;
  text-align: left;
`;

const RecommendTitle = styled(HeaderTitle)`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FooterTitle = styled(HeaderTitle)`
  margin-top: 80px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: ${props => props.theme.letterSpacing};
  color: black;
  text-align: center;
`;

const StorageSmallContent = styled(Paragraph)`
  font-size: 10px;
  color: #4f5e78;
  text-align: right;
  opacity: 0.7;
`;

const StorageSignUpContent = styled(Paragraph)`
  font-size: 14px;
  text-align: left;
  color: #4f5e78;
  margin-bottom: 150px;
  b {
    font-weight: bold;
    color: #2e6dde;
  }
`;

const InfoContent = styled(Paragraph)`
  text-align: left;
  color: #5c6a82;
  margin: 30px 0;
  width: 400px;
`;

const FooterContent = styled(InfoContent)`
  color: #5c6a82;
  font-size: 18px;
`;

const FunctionContent = styled(InfoContent)`
  font-size: 12px;
  margin: 0 50px;
`;

const Content = styled(Paragraph)`
  font-size: 12px;
`;

const StorageContent = styled(Paragraph)`
  font-size: 16px;
`;

const Container = styled.div`
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 35px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 85px 0;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const FooterContainer = styled(SubContainer)`
  justify-content: space-evenly;
  margin: 100px 0;
`;

const PasswordManager = styled(SubContainer)`
  margin: 50px 0 150px 0;
`;

const FooterColumn = styled.div`
  display: flex;
`;

const Column = styled.div`
  padding-top: 15px;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
    border-bottom: 1px solid #8faacc;
    &:last-child {
      border-bottom: none;
    }
  }
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    height: 230px;
  }
`;

const ColumnPasswordManager = styled(Column)`
  height: 200px;
  width: 200px;
`;

const Footer = styled.div`
  width: auto;
  height: 550px;
  background-color: #e0edff;
  padding-top: 15px;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const Input = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #2e6dde;
  margin-right: 2px;
`;

const ButtonWrapper = styled.div`
  margin: 80px 0 20px 0;
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 450px;
  margin: auto;
`;

const RecommendContentWrapper = styled.div`
  width: 400px;
  margin: auto;
`;

const IconWrapper = styled.div`
  width: 550px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 180px;
`;

const FooterWrapper = styled.div``;

const Button = styled.button`
  width: 220px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  background-color: #2e6dde;
  text-align: center;
  margin: auto;
  border: 1px solid white;
  cursor: pointer;
`;

const FooterButton = styled(Button)`
  width: 160px;
`;

const Icon = styled.img`
  height: 300px;
  width: 550px;
`;

const FunctionIcon = styled.img`
  width: 475px;
`;

const IconPasswordManager = styled.img`
  height: 150px;
  width: 150px;
`;

const InfoIcon = styled.img`
  width: 400px;
  height: 160px;
  margin-top: 60px;
`;

const TableIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0px;
  margin-top: 100px;
  tbody tr {
    opacity: 0.6;
  }
  tbody tr:nth-child(1) {
    opacity: 1;
  }
`;

const Tr = styled.tr`
  @media (max-width: ${MOBILE_WIDTH}px) {
    th:nth-child(3),
    th:nth-child(4),
    td:nth-child(3),
    td:nth-child(4) {
      display: none;
    }
    th:nth-child(2),
    td:nth-child(2) {
      width: 95%;
    }
  }
`;

const Th = styled.th`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4f5e78;
  width: 20%;
  border-bottom: 1px solid #2e6dde;
  padding: 15px 10px 15px 10px;
`;

const Td = styled.td`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e6dde;
  width: 20%;
  border-bottom: 1px solid #2e6dde;
  padding: 15px 10px 15px 10px;
`;

const SubscriptionSlide = () => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Container>
        <Title>With Opacity, You’re in Full Control</Title>
        <ContentWrapper>
          <Paragraph>
            Unlike other storage solutions, Opacity relies on client-side
            encryption to ensure that you, and only you have access to your
            files. Our backend services keep zero knowledge regarding your file
            uploads.
          </Paragraph>
        </ContentWrapper>
        <IconWrapper>
          <Icon src={ICON_INTRO} />
        </IconWrapper>
      </Container>
      <Container>
        <SubContainer>
          <Column>
            <FunctionIcon src={ICON_ACCESS_ACCOUNT} />
          </Column>
          <Column>
            <TitleFunction>One Handle To Access Your Account.</TitleFunction>
            <FunctionContent>
              When you sign up with Opacity, a unique Storage Handle is
              generated. This Handle and a user-chosen password is what is
              required to access your storage account. By default, you are the
              only person with this information, so it is important that you
              record your storage handle and password to avoid losing access to
              your account.
            </FunctionContent>
          </Column>
        </SubContainer>
        <SubContainer>
          <Column>
            <TitleFunction>
              Encrypted At Rest. Share Only What You Want.
            </TitleFunction>
            <FunctionContent>
              The key to decrypting your files is generated client-side, so not
              even Opacity can access your files. When you want to share a file
              with a friend, you can easily generate a shareable link with a
              single button click. Only the people with that link can access
              your file, giving you granular control over who has access to your
              files.
            </FunctionContent>
          </Column>
          <Column>
            <FunctionIcon src={ICON_ENCRYPTED} />
          </Column>
        </SubContainer>
      </Container>
      <Container>
        <RecommendTitle>Password Manager Recommended</RecommendTitle>
        <RecommendContentWrapper>
          <Content>
            We understand the need for privacy, that’s why our architecture
            ensures that you are the only person controlling access to your
            files. However, this level of prviacy also means that Opacity does
            not keep any record of your account information, or the Storage
            Handle and password used to access your account.
          </Content>
          <Content>
            To avoid any potential loss of access, we recommend using a password
            manager to store your Opacity credentials. Check out some of the
            solutions below:
          </Content>
        </RecommendContentWrapper>
        <PasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager src={ICON_LASTPASS} />
          </ColumnPasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager src={ICON_1PASSWORD} />
          </ColumnPasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager src={ICON_KEEPASS} />
          </ColumnPasswordManager>
        </PasswordManager>
      </Container>
      <Container>
        <HeaderTitle>Best Bang For Your Buck.</HeaderTitle>
        <StorageContent>
          See How Opacity compares to other storage providers .
        </StorageContent>
        <Table>
          <thead>
            <Tr>
              <Th />
              <Th />
              <Th>Storage</Th>
              <Th>Yearly Cost</Th>
              <Th>Normalized Cost of 64Gb (1&nbsp;OPQ Peg Value)*</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>
                <TableIcon src={ICON_BIT} />
              </Td>
              <Td>Opacity</Td>
              <Td>HR STUFF</Td>
              <Td>01/03/2019</Td>
              <Td>40 FILES</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_BIT} />
              </Td>
              <Td>Opacity</Td>
              <Td>STUFF</Td>
              <Td>01/03/2019.</Td>
              <Td>25 FILES</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_BIT} />
              </Td>
              <Td>Opacity</Td>
              <Td>Maine</Td>
              <Td>01/03/2019</Td>
              <Td>30 FILES</Td>
            </Tr>
          </tbody>
        </Table>
        <StorageSmallContent>Prices as of March 2019</StorageSmallContent>
        <StorageSignUpContent>
          Ready to experience true zero-knowledge storage? <b>Sign up here.</b>
        </StorageSignUpContent>
      </Container>
      <Container>
        <HeaderTitle>Transparent Code Base</HeaderTitle>
        <SubContainer>
          <Column>
            <InfoIcon src={ICON_KEEPASS} />
            <InfoContent>
              Wondering how things work? Take a peek under the hood! All of
              Opacity’s codebase is completely open source for anyone wondering
              how our system works.
            </InfoContent>
            <Button>Explore our code</Button>
          </Column>
          <Column>
            <InfoIcon src={ICON_KEEPASS} />
            <InfoContent>
              Want an overview of Opacity, its current architecture, and where
              we want to go in the future? Check out the Opacity Whitepaper!
              Current version: 1.0
            </InfoContent>
            <Button>Read our whitepaper</Button>
          </Column>
        </SubContainer>
      </Container>
      <Footer>
        <FooterTitle>Are you ready to join our thriving community?</FooterTitle>
        <FooterContainer>
          <FooterWrapper>
            <FooterContent>Number of Unique Opacity Accounts</FooterContent>
            <FooterColumn>
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </FooterColumn>
          </FooterWrapper>
          <FooterWrapper>
            <FooterContent>Files Uploaded to Opacity</FooterContent>
            <FooterColumn>
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </FooterColumn>
          </FooterWrapper>
        </FooterContainer>
        <ButtonWrapper>
          <FooterButton>Try for free</FooterButton>{" "}
          <FooterButton>Sign up</FooterButton>
        </ButtonWrapper>
      </Footer>
    </ContainerWrapper>
  </ThemeProvider>
);

export default SubscriptionSlide;
