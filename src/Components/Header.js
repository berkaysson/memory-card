import styled from "styled-components";
import glowEffect from "../Utils/glowEffect";

const Header = () => {
  return <header>
    <H1Wrapper>Memory Wars</H1Wrapper>
  </header>
}

const H1Wrapper = styled.h1`
  font-size: var(--font-xlg);
  animation: ${glowEffect('blue','text')} 2s linear infinite;
  padding: var(--padding);
`

export default Header;