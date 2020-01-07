import React from "react";
import styled from "styled-components";

import { MOBILE_WIDTH } from "../../config";

import { PhaseType } from "components/shared/phases";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 70px;
  margin-bottom: 70px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

interface PhaseProps {
  isHighlighted?: boolean;
  isActive: boolean;
}

const Phase = styled.div`
  display: flex;
  opacity: ${(props: PhaseProps) => (props.isHighlighted ? 1 : 0.5)};
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: ${(props: PhaseProps) => (props.isActive ? "block" : "none")};
  }
`;

const PhaseInformation = styled.div`
  position: relative;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
  }
`;

const PhaseIcon = styled.img`
  height: 32px;
  width: 32px;
`;

const PhaseNumber = styled.span`
  bottom: -30px;
  color: ${props => props.theme.title.color};
  font-size: 12px;
  left: 50%;
  position: absolute;
  right: 50%;
  text-align: center;
  transform: translateX(-50%);
  width: 200px;
`;

const Line = styled.hr`
  display: inline-block;
  height: 1px;
  width: 100px;
  border: 0;
  border-top: 1px solid ${props => props.theme.title.color};
  margin: 1em 29px;
  padding: 0;
  @media only screen and (max-width: 1400px) {
    width: 50px;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

type BreadcrumbsProps = {
  phase: number
  phases: PhaseType[]
}

const Breadcrumbs = ({ phase: curPhase, phases }: BreadcrumbsProps) => {
  return (
    <Container>
      { phases.map((phase, i, phases) => (
        <Phase
          key={i}
          isActive={curPhase === i}
          isHighlighted={curPhase >= i}
        >
          <PhaseInformation>
            <PhaseIcon src={phase.icon} />
            <PhaseNumber>{i + 1}. {phase.title}</PhaseNumber>
          </PhaseInformation>
          { i !== phases.length - 1 && <Line /> }
        </Phase>
      )) }
    </Container>
  );
}

export default Breadcrumbs;
