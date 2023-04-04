import styled from "styled-components";
import glowEffect from "../Utils/glowEffect";

const Header = () => {
  return <header>
    <H1Wrapper>Memory Card Game</H1Wrapper>
  </header>
}

const H1Wrapper = styled.h1`
  font-size: var(--font-xlg);
  text-shadow: 0px 0px 10px rgba(252, 163, 17, 1);
  animation: ${glowEffect('purple','text')} 2s linear infinite;
`

export default Header;