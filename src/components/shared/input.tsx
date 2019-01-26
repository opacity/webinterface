import styled from "styled-components";

const Input = styled.input`
  width: 380px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  border: 0;
  color: #ffffff;
  background-color: #232b40;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export default Input;
