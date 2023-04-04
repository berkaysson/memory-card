import styled from "styled-components";
import glowEffect from "../Utils/glowEffect";

const Button = ({onClick,text}) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper> 
}

export default Button;

const ButtonWrapper = styled.button`
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  padding: 1.5rem 3rem;
  font-size: var(--font-lg);
  background:linear-gradient(90deg, var(--ls-blue) 0%, var(--ls-purple) 100%);
  color: var(--light-color);
  border: none;
  border-radius:var(--button-border-radius);
  cursor: pointer;
  transition:all 0.3s ease-in-out ;

  &:hover{
    transform: scale(1.02);
    animation: ${glowEffect('blue', 'box')} 2s linear infinite;
  }

  &:active{
    transform: scale(1);
  }
`