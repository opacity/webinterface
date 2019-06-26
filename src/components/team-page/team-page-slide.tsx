import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_TYPES, MOBILE_WIDTH, theme } from "../../config";
import Footer from "../shared/footer";
import Header from "../shared/header";

const ICON_GITHUB = require("../../assets/images/github.png");
const ICON_LINKEDIN = require("../../assets/images/tp-linkedin.svg");

const ICON_JASON = require("../../assets/images/jason.png");
const ICON_ARON = require("../../assets/images/aron.png");
const ICON_TIM = require("../../assets/images/tim.png");
const ICON_WILLIAM = require("../../assets/images/william.png");
const ICON_CONNOR = require("../../assets/images/default_profile_picture.png");
const ICON_MARCEL = require("../../assets/images/marcel.png");
const ICON_EDMUND = require("../../assets/images/edmund.png");
const ICON_REBEL = require("../../assets/images/rebel.png");
const ICON_LADISLAV = require("../../assets/images/ladislav.png");

const people = [
  {
    title: "Jason Coppola",
    icon: ICON_JASON,
    role: "CEO",
    github: "https://github.com/funkydrummer",
    linkedin: "https://www.linkedin.com/in/jasoncoppola",
    bio:
      "Jason has 20 years experience in software product  development, working in Engineering, Product, and Executive leadership. He has led organizations to build and deliver highly scalable applications at Fortune 100 and startup companies by applying his experience as an entrepreneur and Agile expert."
  },
  {
    title: "Aron Hiltzik",
    icon: ICON_ARON,
    role: "Marketing",
    github: "",
    linkedin: "https://www.linkedin.com/in/aronhiltzik/",
    bio:
      "Aron is a recent Student-athlete graduate from University of Illinois with a Bachelor of Arts in Advertising. He founded his first business in 2018, which scaled to over $500k in revenue in 6 months. Aron has specialized himself in Marketing, SEO optimization, and brand strategy."
  },
  {
    title: "Tim DeHaas",
    icon: ICON_TIM,
    role: "Community Manager",
    github: "https://github.com/MrRedPandabaer/",
    linkedin: "",
    bio:
      "Tim has 2 years of experience in building online communities and social media management while utilizing different platforms to magnify outreach. He also possesses a skill set in basic programming coming handy in community interactions. Further, Tim has a B. Sc. in Biochemistry and is currently taking a Master's degree in Biochemistry and Molecular Biology."
  },
  {
    title: "William Halunen",
    icon: ICON_WILLIAM,
    role: "Community Manager",
    github: "https://github.com/WHalunen",
    linkedin: "https://www.linkedin.com/in/william-halunen-080987156/",
    bio:
      "William has 2 years of experience managing online communities. He has helped organically grow communities totaling over 50,000 members across all social media outlets. He also has a bachelors degree in computer science."
  },
  {
    title: "Connor Hen",
    icon: ICON_CONNOR,
    role: "Developer",
    github: "https://github.com/CKH4",
    linkedin: "",
    bio:
      "Connor has spent the past 5 years in a variety of development roles. He got his programming start in game development making arcade-style games before moving on to generative art and frontend web development. Since then he's moved into a more general role doing everything from designing and building frontends to library development."
  },
  {
    title: "Marcel Lindig",
    icon: ICON_MARCEL,
    role: "Developer",
    github: "https://github.com/nullpilot",
    linkedin: "",
    bio:
      "Marcel has 10 years of experience developing software, working in everything from front end development to database administration. He has worked with a variety of clients, from individual designers to international corporations, to advise on software needs and deliver custom solutions."
  },
  {
    title: "Edmund Mai",
    icon: ICON_EDMUND,
    role: "Software Engineer",
    github: "https://github.com/EdmundMai",
    linkedin: "https://www.linkedin.com/in/edmundmai/",
    bio:
      "Edmund is an experienced lead developer with experience working for renowned tech startups in NYC. He has founded and built multiple software businesses, one of which was recently acquired."
  },
  {
    title: "Rebel Fornea",
    icon: ICON_REBEL,
    role: "Technical Lead",
    github: "https://github.com/rfornea",
    linkedin: "https://www.linkedin.com/in/rebel-fornea-7640b8122/",
    bio:
      "Rebel began her software career in the frontend in a typical corporation. She got her start in crypto by jointly winning a developer bounty using a language she'd never developed in, and now focuses on backend development, deployments, and design."
  },
  {
    title: "Ladislav Balon",
    icon: ICON_LADISLAV,
    role: "Fullstack Developer",
    github: "https://github.com/tenisakb",
    linkedin: "https://www.linkedin.com/in/ladislav-balon-00134b54/",
    bio:
      "Ladislav is experienced full-stack developer with an overlap, he started programming when he was 13 years old. He has worked on many commercial projects for interesting clients as well as on his own projects."
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
  padding: 70px 0 0 0;
`;

const PeopleContainer = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-rows: repeat(3, 0.5fr);
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1020px) {
    grid-gap: 40px;
  }
  @media only screen and (max-width: 750px) {
    grid-template-rows: repeat(9, 0.5fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PeopleWrapper = styled.div`
  border: solid 0.5px #acb3bf;
  padding: 50px 20px;
  margin: auto;
  height: 450px;
  position: relative;
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
  width: 150px;
  height: 150px;
  border-radius: 80px;
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

const PersonTitle = styled.h2`
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

const PersonRole = styled(Parapraph)`
  width: 170px;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #4f5e78;
`;

const PersonBio = styled(Parapraph)`
  margin-top: 10px;
  font-size: 14px;
`;

const Content = styled(Parapraph)`
  font-size: 16px;
  letter-spacing: ${props => props.theme.letterSpacing};
  padding-bottom: 40px;
`;

const PersonLinkContainer = styled.div`
  position: absolute;
  left: 10px;
  bottom: 0;
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
              <PersonBio>{person.bio}</PersonBio>
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
