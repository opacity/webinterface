import styled from "styled-components";

const OutboundLink = styled.a.attrs({
  target: "_blank"
})`
  color: ${props => props.theme.link.color};
  text-decoration: none;
  font-weight: 600;
`;

export default OutboundLink;
