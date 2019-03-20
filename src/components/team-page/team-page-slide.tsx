import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, DESKTOP_WIDTH } from "../../config";

const ICON_JASON = require("../../assets/images/credit.svg");
const ICON_TAYLOR = require("../../assets/images/credit.svg");
const ICON_TIM = require("../../assets/images/credit.svg");
const ICON_WILLIAM = require("../../assets/images/credit.svg");
const ICON_CONOR = require("../../assets/images/credit.svg");
const ICON_MARCEL = require("../../assets/images/credit.svg");
const ICON_INFO_EDMUND = require("../../assets/images/credit.svg");
const ICON_INFO_REBEL = require("../../assets/images/credit.svg");
const ICON_INFO_LADISLAV = require("../../assets/images/credit.svg");

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
  { title: "Conor", icon: ICON_CONOR, role: "Developer" },
  { title: "Marcel", icon: ICON_MARCEL, role: "Developer" },
  { title: "Edmund", icon: ICON_INFO_EDMUND, role: "Software Engineer" },
  { title: "Rebel", icon: ICON_INFO_REBEL, role: "Technical Lead" },
  { title: "Ladislav", icon: ICON_INFO_LADISLAV, role: "Fullstack Developer" }
];

const ContainerWrapper = styled.div``;

const Container = styled.div`
  height: 100%;
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
`;

const Header = styled.div`
  width: auto;
  background-color: #2e6dde;
  padding: 70px 0 70px 0;
`;

const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 40px 0;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const PeopleWrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  margin-inline-end: 10px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 470px;
  margin: auto;
`;

const Icon = styled.img``;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;

const PersonTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: black;
  text-align: center;
  color: ${props => props.theme.title.color};
`;

const Parapraph = styled.p`
  font-weight: 500;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: 0.7px;
  color: black;
  text-align: left;
  font-size: 12px;
`;

const PersonRole = styled(Parapraph)`
  text-align: center;
  width: 170px;
  margin: auto;
`;

const Content = styled(Parapraph)`
  font-size: 14px;
  letter-spacing: ${props => props.theme.letterSpacing};
  color: white;
  text-align: center;
  padding-bottom: 40px;
`;

const TeamPageSlide = () => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header>
        <Title>Meet the Team</Title>
        <ContentWrapper>
          <Content>Meet the grat people behind Opacity.</Content>
        </ContentWrapper>
      </Header>
      <Container>
        <PeopleContainer>
          {_.map(people, person => (
            <PeopleWrapper>
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
