import styled from "styled-components";

const InfoBar = ({text}) => {
  return <InfoWrapper>{text}</InfoWrapper>
}

export default InfoBar;

const InfoWrapper = styled.p`
  font-size: var(--font-lg);
`