import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";

const FlexGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
  @media (max-width: 1200px) {
    display: block;
  }
`;

const FlexCol = styled.div`
  width: 25%;
  height: 451px;
  background-color: #232b40;
  padding-top: 15px;
  margin-inline-end: 10px;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

const Headline = styled.h1`
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: auto;
  text-align: center;
  margin-top: 20px;
`;

const Hr = styled.hr`
  width: 59px;
  height: 3px;
  background-color: #a995bb;
`;

const Content = styled.p`
  width: 171px;
  min-height: 70px;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: 15px 15px 0 15px;
  @media (max-width: 1200px) {
    width: auto;
    margin: 0 30px 0 30px;
  }
`;

const ContentBold = styled(Content)`
  font-weight: bold;
  min-height: 28px;
`;

const Price = styled.p`
  font-weight: bold;
  width: 90px;
  min-height: 50px;
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
  margin: auto;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 171px;
  height: 40px;
  background-color: #846b99;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
  margin: auto;
  border: none;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 40px 0 40px 0;
`;

const Space = styled.div`
  height: 154px;
`;

const SubscriptionSlide = () => (
  <ScreenContainer title={"Choose Subscription Plan"}>
    <FlexGrid>
      <FlexCol>
        <Headline>Basic</Headline>
        <Hr />
        <Content>
          Secure, encrypted storage solution perfect for the needs of the
          individual.
        </Content>
        <ContentBold>128 GB secure, decentralized storage</ContentBold>
        <ContentBold>Unlimited downloads</ContentBold>
        <Price>2 OPQ</Price>
        <ButtonWrapper>
          <Button>CHOOSE PLAN</Button>
        </ButtonWrapper>
      </FlexCol>
      <FlexCol>
        <Headline>Professional</Headline>
        <Hr />
        <Content>
          For professionals looking for a secure, easily accessible storage
          solution while on the move.
        </Content>
        <ContentBold>512 GB secure, decentralized storage</ContentBold>
        <ContentBold>Unlimited downloads</ContentBold>
        <Price>8 OPQ</Price>
        <ButtonWrapper>
          <Button>CHOOSE PLAN</Button>
        </ButtonWrapper>
      </FlexCol>
      <FlexCol>
        <Headline>Business</Headline>
        <Hr />
        <Content>
          A secure, encrypted storage solution for growing businesses. Perfect
          for small teams.{" "}
        </Content>
        <ContentBold>1 TB secure, decentralized storage</ContentBold>
        <ContentBold>Unlimited downloads</ContentBold>
        <Price>16 OPQ</Price>
        <ButtonWrapper>
          <Button>CHOOSE PLAN</Button>
        </ButtonWrapper>
      </FlexCol>
      <FlexCol>
        <Headline>Enterprise</Headline>
        <Hr />
        <Content>
          Secure, scalable, on-demand storage for corporate entities. Contact
          our team to discover how Opacity can secure your enterprise storage
          needs.
        </Content>
        <Space />
        <ButtonWrapper>
          <Button>CONTACT US</Button>
        </ButtonWrapper>
      </FlexCol>
    </FlexGrid>
  </ScreenContainer>
);

export default SubscriptionSlide;
