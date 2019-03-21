import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, MOBILE_WIDTH } from "../../config";

const ICON_JASON = require("../../assets/images/jason.jpg");
const ICON_TAYLOR = require("../../assets/images/taylor.jfif");
const ICON_TIM = require("../../assets/images/tim.png");
const ICON_WILLIAM = require("../../assets/images/william.jfif");
const ICON_CONNOR = require("../../assets/images/connor.png");
const ICON_MARCEL = require("../../assets/images/marcel.png");
const ICON_EDMUND = require("../../assets/images/edmund.png");
const ICON_REBEL = require("../../assets/images/rebel.jfif");
const ICON_LADISLAV = require("../../assets/images/ladislav.png");

const people = [
  {
    title: "Jason",
    icon: ICON_JASON,
    role: "CEO"
  },
  {
    title: "Taylor",
    icon: ICON_TAYLOR,
    role: "UI/UX"
  },
  { title: "Tim", icon: ICON_TIM, role: "Community Manager" },
  { title: "William", icon: ICON_WILLIAM, role: "Community Manager" },
  { title: "Conor", icon: ICON_CONNOR, role: "Developer" },
  { title: "Marcel", icon: ICON_MARCEL, role: "Developer" },
  { title: "Edmund", icon: ICON_EDMUND, role: "Software Engineer" },
  { title: "Rebel", icon: ICON_REBEL, role: "Technical Lead" },
  { title: "Ladislav", icon: ICON_LADISLAV, role: "Fullstack Developer" }
];

const ContainerWrapper = styled.div``;

const Container = styled.div`
  height: 100%;
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
  padding-bottom: 20px;
`;

const Header = styled.div`
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
  padding: 30px 0;
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

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 40px;
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
  color: black;
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
  color: black;
  text-align: center;
  font-size: 12px;
`;

const PersonRole = styled(Parapraph)`
  font-size: 10px;
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

const TeamPageSlide = () => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header>
        <Title>Meet the Team</Title>
        <ContentWrapper>
          <Content>Meet the great people behind Opacity.</Content>
        </ContentWrapper>
      </Header>
      <Container>
        <PeopleContainer>
          {_.map(people, person => (
            <PeopleWrapper key={_.random(true)}>
              <Wrapper>
                <Icon src={person.icon} />
              </Wrapper>
              <PersonTitle>{person.title}</PersonTitle>
              <PersonRole>{person.role}</PersonRole>
            </PeopleWrapper>
          ))}
        </PeopleContainer>
      </Container>
    </ContainerWrapper>
  </ThemeProvider>
);

export default TeamPageSlide;
