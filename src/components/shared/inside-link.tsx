import styled from "styled-components";

const InsideLink = styled.a.attrs({
  target: "_self"
})`
  color: ${props => props.theme.link.color};
  text-decoration: none;
  font-weight: 600;
`;

export default InsideLink;
