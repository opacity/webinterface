import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 220px;
  height: 80px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin: 15px;
  text-transform: uppercase;
  margin-left:0px;
  background-color: ${ (props : any) => props.backgroundColor || 'white' };
  position: ${ (props : any) => props.position || 'none' };
  top: ${ (props : any) => props.top || '0' };
`;

const Button = props => {
  const { children, onClick, disabled, className, backgroundColor, position, top } = props;
  return (
    <ButtonStyled
      {...props}
      className={className}
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      position={position}
      top={top}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
