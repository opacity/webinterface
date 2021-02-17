import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_TYPES, MOBILE_WIDTH, theme } from "../../config";
import Footer from "../shared/footer";
import Header from "../shared/header";

const ICON_GITHUB = require("../../assets/images/github.png");

const ICON_OCELOT = require("../../assets/images/OcelotLogo_ACT.png");
const ICON_IMGOPCT = require("../../assets/images/imgopct.png");
const ICON_OPACITYSTORA_GE = require("../../assets/images/opacitystora-ge.svg");
const ICON_OPACITYDEFAULT = require("../../assets/images/default_profile_picture.png");

type App = {
  span?: number
  title: string
  icon: string
  role: string
  links: { [key: string]: string }
  bio: string
}

const apps: App[] = [
  {
    title: "Ocelot",
    icon: ICON_OCELOT,
    role: "Advanced File Management",
    links: {
      github: "https://github.com/act-opacity/ocelot/",
    },
    bio:
      "Ocelot is a cross-platform, containerized web application client for the Opacity Storage service run from your local machine. Ocelot can be used to store and manage multiple Opacity accounts; sync files and folders between Opacity and one or more of your devices; provide sync status per file; search and filter your files easily; perform file and folder management actions; review file version history and access previous file versions; and quickly open a file share link to share or review its contents."
  },
  {
    title: "imgOPCT",
    icon: ICON_IMGOPCT,
    role: "Image Sharing",
    links: {
      website: "https://imgopct.com/",
    },
    bio:
      "imgOPCT is a public imageboard platform to share your images uploaded on Opacity. It's hosted for the community by the community. You can upload images and share them with the public on the front page."
  },
  {
    title: "Opacity Handle Shortener",
    icon: ICON_OPACITYSTORA_GE,
    role: "Link Shortener",
    links: {
      website: "https://opacitystora.ge/",
    },
    bio:
      "Opacitystora.ge allows you to easily shorten shared links (aka handles) from the Opacity Storage web services."
  },
  {
    title: "Opacity Desktop Application",
    icon: ICON_OPACITYDEFAULT,
    role: "Desktop File Management",
    links: {
      github: "https://github.com/Mavahu/opacity-electron",
    },
    bio:
      "This Windows desktop application allows you to interact with your Opacity account. It supports all features and even offers you the possibility to rename folders or move files/folders around."
  },
  {
    span: 2,
    title: "Opacity API for Developers",
    icon: ICON_OPACITYDEFAULT,
    role: "API",
    links: {
      website: "https://api.opacity.io:3000/swagger/index.html",
    },
    bio:
      "The Opacity API is provided for developers to build and integrate solutions with the Opacity Storage platform. Opacity’s developer platform is a core part of our mission to empower developers to grow and monetize their services using the OPCT token. Our APIs are designed to enable teams of any shape or size to build robust integrations that help them customize and get the most value out of Opacity. The Opacity API is built using REST conventions and designed to have a predictable URL structure. It uses standard HTTP features, including methods (POST, GET, PUT, DELETE) and error response codes."
  },
];

const ContainerWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
  padding-bottom: 100px;
`;

const HeaderContainer = styled.div`
  width: auto;
  padding: 70px 0 0 0;
`;

const AppsContainer = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-rows: repeat(2, 0.5fr);
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 1020px) {
    grid-gap: 40px;
  }
  @media only screen and (max-width: 750px) {
    grid-template-rows: repeat(5, 0.5fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AppWrapper = styled.div<{ span?: number }>`
  border: solid 0.5px #acb3bf;
  padding: 50px 20px;
  position: relative;
  align-self: stretch;
  grid-column: span ${props => props.span || 1};
`;

const Wrapper = styled.div`
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 470px;
  margin: auto;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
  }
`;

const AppIcon = styled.img`
  height: 150px;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin: 5px;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e6dde;
`;

const AppTitle = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4f5e78;
  text-align: center;
  color: ${props => props.theme.title.color};
  font-weight: bold;
  text-transform: uppercase;
`;

const Parapraph = styled.p`
  font-weight: 500;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: 0.7px;
  color: #4f5e78;
  text-align: center;
  font-size: 12px;
`;

const AppRole = styled(Parapraph)`
  width: calc(100% - 16px);
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #4f5e78;
`;

const AppBio = styled(Parapraph)`
  margin: 10px auto 0 auto;
  font-size: 14px;
  text-align: left;
  max-width: 600px;
  padding: 0 12px;
`;

const Content = styled(Parapraph)`
  font-size: 16px;
  letter-spacing: ${props => props.theme.letterSpacing};
  padding-bottom: 40px;
`;

const AppLinkContainer = styled.div`
  position: absolute;
  left: 10px;
  bottom: 0;
`;

const AppLink = styled.a`
  display: inline-block;
`;

const linkIcon = (name: string) => {
  switch (name) {
    case "github":
      return <Icon src={ICON_GITHUB} />;
    default:
      return <div style={{ height: 28, margin: 5, color: "#000000" }}>Website ↗</div>;
  };
};

const CommunityPageSlide = ({ isLoggedIn }) => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header type={HEADER_TYPES.COMMUNITY_PAGE} isLoggedIn={isLoggedIn} />
      <HeaderContainer>
        <Title>Community Apps</Title>
        <ContentWrapper>
          <Content>Take a look at the great apps made by members of the Opacity community.</Content>
        </ContentWrapper>
      </HeaderContainer>
      <Container>
        <AppsContainer>
          {apps.map(app => (
            <AppWrapper key={app.title} span={app.span}>
              <Wrapper>
                <AppIcon src={app.icon} />
              </Wrapper>
              <AppTitle>{app.title}</AppTitle>
              <AppRole>{app.role}</AppRole>
              <AppBio>{app.bio}</AppBio>
              <AppLinkContainer>
                {Object.keys(app.links).map(linkName => (
                  <AppLink key={app.links[linkName]} href={app.links[linkName]} target="_blank">
                    {linkIcon(linkName)}
                  </AppLink>
                ))}
              </AppLinkContainer>
            </AppWrapper>
          ))}
        </AppsContainer>
      </Container>
      <Footer />
    </ContainerWrapper>
  </ThemeProvider>
);

export default CommunityPageSlide;
