import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_TYPES, MOBILE_WIDTH, theme } from "../../config";
import Footer from "../shared/footer";
import Header from "../shared/header";

const ICON_GITHUB = require("../../assets/images/tp-github.svg");
const ICON_LINKEDIN = require("../../assets/images/tp-linkedin.svg");

const ICON_JASON = require("../../assets/images/jason.jpg");
const ICON_ARON = require("../../assets/images/aron.jfif");
const ICON_TIM = require("../../assets/images/tim.png");
const ICON_WILLIAM = require("../../assets/images/william.jfif");
const ICON_CONNOR = require("../../assets/images/default_profile_picture.png");
const ICON_MARCEL = require("../../assets/images/marcel.png");
const ICON_EDMUND = require("../../assets/images/edmund.png");
const ICON_REBEL = require("../../assets/images/rebel.jfif");
const ICON_LADISLAV = require("../../assets/images/ladislav.png");

const people = [
  {
    title: "Jason Coppola",
    icon: ICON_JASON,
    role: "CEO",
    github: "https://github.com/funkydrummer",
    linkedin: "https://www.linkedin.com/in/jasoncoppola"
  },
  {
    title: "Aron Hiltzik",
    icon: ICON_ARON,
    role: "Marketing",
    github: "",
    linkedin: "https://www.linkedin.com/in/aronhiltzik/"
  },
  {
    title: "Tim DeHaas",
    icon: ICON_TIM,
    role: "Community Manager",
    github: "",
    linkedin: ""
  },
  {
    title: "William Halunen",
    icon: ICON_WILLIAM,
    role: "Community Manager",
    github: "https://github.com/WHalunen",
    linkedin: "https://www.linkedin.com/in/william-halunen-080987156/"
  },
  {
    title: "Connor Hen",
    icon: ICON_CONNOR,
    role: "Developer",
    github: "https://github.com/CKH4",
    linkedin: ""
  },
  {
    title: "Marcel Lindig",
    icon: ICON_MARCEL,
    role: "Developer",
    github: "https://github.com/nullpilot",
    linkedin: ""
  },
  {
    title: "Edmund Mai",
    icon: ICON_EDMUND,
    role: "Software Engineer",
    github: "https://github.com/EdmundMai",
    linkedin: "https://www.linkedin.com/in/edmundmai/"
  },
  {
    title: "Rebel Fornea",
    icon: ICON_REBEL,
    role: "Technical Lead",
    github: "https://github.com/rfornea",
    linkedin: "https://www.linkedin.com/in/rebel-fornea-7640b8122/"
  },
  {
    title: "Ladislav Balon",
    icon: ICON_LADISLAV,
    role: "Fullstack Developer",
    github: "https://github.com/tenisakb",
    linkedin: "https://www.linkedin.com/in/ladislav-balon-00134b54/"
  }
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
  padding: 70px 0 70px 0;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 70px 0 0px 0;
  }
`;

const PeopleContainer = styled.div`
  display: grid;
  grid-gap: 100px;
  grid-template-rows: repeat(3, 0.5fr);
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1020px) {
    grid-gap: 50px;
  }
  @media only screen and (max-width: 750px) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    grid-template-rows: repeat(9, 0.5fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PeopleWrapper = styled.div`
  border: solid 0.5px #acb3bf;
  padding: 50px 20px;
  margin: auto;
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

const PersonIcon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
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

const PersonTitle = styled.h2`
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4f5e78;
  text-align: center;
  color: ${props => props.theme.title.color};
  font-weight: bold;
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

const PersonRole = styled(Parapraph)`
  font-size: 12px;
  width: 170px;
  margin: auto;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #4f5e78;
`;

const Content = styled(Parapraph)`
  font-size: 14px;
  letter-spacing: ${props => props.theme.letterSpacing};
  padding-bottom: 40px;
`;

const PersonLinkContainer = styled.div`
  position: absolute;
  margin: 10px 0px 0px -10px;
`;

const PersonLink = styled.a`
  display: inline-block;
`;

const TeamPageSlide = ({ isLoggedIn }) => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header type={HEADER_TYPES.TEAM_PAGE} isLoggedIn={isLoggedIn} />
      <HeaderContainer>
        <Title>Meet the Team</Title>
        <ContentWrapper>
          <Content>Meet the great people behind Opacity.</Content>
        </ContentWrapper>
      </HeaderContainer>
      <Container>
        <PeopleContainer>
          {_.map(people, person => (
            <PeopleWrapper key={_.random(true)}>
              <Wrapper>
                <PersonIcon src={person.icon} />
              </Wrapper>
              <PersonTitle>{person.title}</PersonTitle>
              <PersonRole>{person.role}</PersonRole>
              {(person.linkedin || person.github) && (
                <PersonLinkContainer>
                  {person.linkedin && (
                    <PersonLink href={person.linkedin} target="_blank">
                      <Icon src={ICON_LINKEDIN} />
                    </PersonLink>
                  )}
                  {person.github && (
                    <PersonLink href={person.github} target="_blank">
                      <Icon src={ICON_GITHUB} />
                    </PersonLink>
                  )}
                </PersonLinkContainer>
              )}
            </PeopleWrapper>
          ))}
        </PeopleContainer>
      </Container>
      <Footer />
    </ContainerWrapper>
  </ThemeProvider>
);

export default TeamPageSlide;
