import React from "react";
import styled, { keyframes } from "styled-components";

const WrapperSpinner = styled.div`
  height: 30px;
  border-radius: 5px;
}`;

const animateStripes = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
`;

const Inner = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #2e6dde;
  border-radius: 5px;
  transition: width 0.4s ease-in-out;
  background-size: 30px 30px;
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  animation: ${animateStripes} 3s linear infinite;
`;

const Spinner = ({ isActive }) => {
  return isActive ? (
    <WrapperSpinner>
      <Inner />
    </WrapperSpinner>
  ) : null;
};

export default Spinner;
