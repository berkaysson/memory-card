import styled from "styled-components";
import glowEffect from "../Utils/glowEffect";

const Button = ({onClick,text}) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper> 
}

export default Button;

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color:  var(--dark-color);
  color: var(--light-color);
  border: none;
  border-radius:var(--button-border-radius);
  cursor: pointer;
  animation: ${glowEffect('blue', 'box')} 2s linear infinite;
`