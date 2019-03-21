import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { MOBILE_WIDTH, theme } from "../../config";

const ICON_INTRO = require("../../assets/images/so_intro.svg");
const ICON_ACCESS_ACCOUNT = require("../../assets/images/so_access_account.svg");
const ICON_BIT = require("../../assets/images/bit.svg");
const ICON_ENCRYPTED = require("../../assets/images/so_encrypted.svg");
const ICON_TRANSPARENT_BASE = require("../../assets/images/so_transparent_base.svg");
const ICON_EXPLORE_CODE = require("../../assets/images/so_explore_code.svg");
const ICON_LASTPASS = require("../../assets/images/last_pass.png");
const ICON_1PASSWORD = require("../../assets/images/1password.png");
const ICON_KEEPASS = require("../../assets/images/kee_pass.png");
const ICON_OPACITY_LOGO = require("../../assets/images/logo-login.svg");
const ICON_GOOGLE_ONE = require("../../assets/images/google_one.png");
const ICON_BOX_PERSONAL_PRO = require("../../assets/images/box_personal_pro.png");
const ICON_MEGA_PRO_LITE = require("../../assets/images/mega_pro_lite.png");
const ICON_SYNC_PERSONAL_PRO = require("../../assets/images/sync_personal_pro.png");
const ICON_DROPBOX = require("../../assets/images/dropbox_plus.jpg");

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
  @media (max-width: ${MOBILE_WIDTH}px) {
    text-align: left;
    font-size: 23px;
    padding: 0 40px;
  }
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
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 22px;
    text-align: left;
    margin: 40px 20px 26px 40px;
  }
`;

const RecommendTitle = styled(HeaderTitle)`
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 40px;
    font-size: 22px;
  }
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
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 20px;
  }
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
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-bottom: 50px;
    padding: 0 20px;
  }
`;

const InfoContent = styled(Paragraph)`
  text-align: left;
  color: #5c6a82;
  margin: 30px 0;
  width: 400px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    height: auto;
    padding: 0 25px;
  }
`;

const FooterContent = styled(InfoContent)`
  color: #5c6a82;
  font-size: 18px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 16px;
  }
`;

const FunctionContent = styled(InfoContent)`
  font-size: 12px;
  margin: 0 50px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    margin: 0px;
  }
`;

const Content = styled(Paragraph)`
  font-size: 12px;
`;

const StorageContent = styled(Paragraph)`
  font-size: 16px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 85px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
    margin: 0 0 55px 0;
  }
`;

const FooterContainer = styled(SubContainer)`
  justify-content: space-evenly;
  margin: 100px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: 60px 0;
  }
`;

const PasswordManager = styled(SubContainer)`
  margin: 50px 0 150px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: 50px 0 50px 0;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 25px;
  }
`;

const Column = styled.div`
  padding-top: 15px;
`;

const ColumnPasswordManager = styled(Column)`
  height: 200px;
  width: 200px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
    text-align: center;
    margin: auto;
  }
`;

const Footer = styled.div`
  width: auto;
  height: 550px;
  background-color: #e0edff;
  padding-top: 15px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    height: auto;
    padding-bottom: 25px;
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
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    padding: 0 25px;
  }
`;

const RecommendContentWrapper = styled.div`
  width: 400px;
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
  }
`;

const IconWrapper = styled.div`
  width: 550px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 180px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    margin-bottom: 80px;
  }
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
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: -webkit-fill-available;
    margin: 0 25px;
  }
`;

const FooterButton = styled(Button)`
  width: 160px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: -webkit-fill-available;
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  height: 300px;
  width: 550px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
  }
`;

const FunctionIcon = styled.img`
  width: 475px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const FunctionIconMobile = styled(FunctionIcon)`
  display: none;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
    display: block;
    margin: 25px 0;
  }
`;

const IconPasswordManager = styled.img`
  height: 150px;
  width: 150px;
  cursor: pointer;
`;

const InfoIcon = styled.img`
  width: 400px;
  height: 160px;
  margin-top: 60px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
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
    td {
      font-weight: bold;
    }
  }
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 0px;
    padding: 0 20px;
  }
`;

const Tr = styled.tr`
  @media (max-width: ${MOBILE_WIDTH}px) {
    th:nth-child(2),
    th:nth-child(5),
    td:nth-child(2),
    td:nth-child(5) {
      display: none;
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
            <FunctionIconMobile src={ICON_ACCESS_ACCOUNT} />
            <FunctionContent>
              When you sign up with Opacity, a unique Account Handle is created
              just for you. This Handle and a user-chosen password is all that
              is required to access your storage account. By default, you are
              the only person with this information, so it is important that you
              record your Account Handle and password to avoid trouble accessing
              your account. Keep it safe!
            </FunctionContent>
          </Column>
        </SubContainer>
        <SubContainer>
          <Column>
            <TitleFunction>
              Encrypted At Rest. Share Only What You Want.
            </TitleFunction>
            <FunctionIconMobile src={ICON_ENCRYPTED} />
            <FunctionContent>
              The key to unlocking your files is generated client-side - not
              even Opacity can access your files! When you want to share a file
              with a friend, you can easily generate a shareable link with a
              single button click. Only people with that link can access your
              file, giving you granular control over who has access to your
              data.
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
            We understand the need for privacy. That’s why our architecture
            ensures only you control access to your personal data. However, this
            level of account privacy means that Opacity does not retain any
            record of your account information, including the Account Handle and
            password used to create and access your account.
          </Content>
          <Content>
            To avoid any potential loss of access, we recommend using a password
            manager to safely store your Opacity credentials. Check out some of
            the solutions below:
          </Content>
        </RecommendContentWrapper>
        <PasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager
              src={ICON_LASTPASS}
              onClick={() => window.open("https://www.lastpass.com/", "_blank")}
            />
          </ColumnPasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager
              src={ICON_1PASSWORD}
              onClick={() => window.open("https://1password.com/", "_blank")}
            />
          </ColumnPasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager
              src={ICON_KEEPASS}
              onClick={() => window.open("https://keepass.info/", "_blank")}
            />
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
                <TableIcon src={ICON_OPACITY_LOGO} />
              </Td>
              <Td>OPACITY</Td>
              <Td>100 GB</Td>
              <Td>$0.03</Td>
              <Td>$0.02</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_GOOGLE_ONE} />
              </Td>
              <Td>Google One</Td>
              <Td>100 GB</Td>
              <Td>$23.86</Td>
              <Td>$15.28</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_BOX_PERSONAL_PRO} />
              </Td>
              <Td>Box Personal Pro</Td>
              <Td>100 GB</Td>
              <Td>$120.00</Td>
              <Td>$76.80</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_MEGA_PRO_LITE} />
              </Td>
              <Td>Mega Pro Lite</Td>
              <Td>200 GB</Td>
              <Td>$68.16</Td>
              <Td>$21.81</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_SYNC_PERSONAL_PRO} />
              </Td>
              <Td>Sync Personal Pro</Td>
              <Td>500 GB</Td>
              <Td>$49.00</Td>
              <Td>$6.27</Td>
            </Tr>
            <Tr>
              <Td>
                <TableIcon src={ICON_DROPBOX} />
              </Td>
              <Td>Dropbox Plus</Td>
              <Td>1000 GB</Td>
              <Td>$99.00</Td>
              <Td>$6.34</Td>
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
            <InfoIcon src={ICON_TRANSPARENT_BASE} />
            <InfoContent>
              Wondering how things work? Take a peek under the hood! All of
              Opacity’s codebase is completely open source for anyone wondering
              how our system works.
            </InfoContent>
            <Button
              onClick={() =>
                window.open("https://github.com/opacity", "_blank")
              }
            >
              Explore our code
            </Button>
          </Column>
          <Column>
            <InfoIcon src={ICON_EXPLORE_CODE} />
            <InfoContent>
              Want an overview of Opacity, its current architecture, and where
              we want to go in the future? Check out the Opacity Whitepaper!
              Current version: 1.0
            </InfoContent>
            <Button
              onClick={() =>
                window.open(
                  "https://alpha.opacity.io/#/OpacityS6ba809778cee8b017d48aa13564f32351213b108b8c724c83c69ee37ab366912VEKcnYtf",
                  "_blank"
                )
              }
            >
              Read our whitepaper
            </Button>
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
