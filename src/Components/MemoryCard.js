import styled from "styled-components";
import glowEffect from "../Utils/glowEffect";

const MemoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ;
  cursor: pointer;
  height: 234px;
  padding-top: 16px;
  border-radius: var(--button-border-radius);
  box-shadow: rgba(0, 25, 0, 0.6) 0px -20px 28px 0px inset,
    rgba(0, 0, 25, 0.4) 0px -40px 25px 0px inset,
    rgba(0, 0, 25, 0.5) 0px -72px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px 3px 2px,
    rgba(0, 0, 0, 0.4) 0px 5px 3px, rgba(0, 0, 0, 0.4) 0px 10px 5px,
    rgba(25, 0, 0, 0.4) 0px 20px 10px, rgba(0, 0, 0, 0.4) 0px 38px 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-8px) rotate(3deg);
  }

  &:hover img {
    filter: brightness(1) contrast(1.1) invert(5%);
  }

  & img {
    aspect-ratio: 1/1;
    width: 200px;
    height: auto;
    border-bottom-left-radius: var(--button-border-radius);
    border-bottom-right-radius: var(--button-border-radius);
    filter: brightness(0.9) invert(13%) contrast(0.9) ;
  }
`;

const MemoryCard = ({ img, onClick }) => {
  return (
    <MemoryCardWrapper onClick={() => onClick(img)}>
      {img.name}
      <img src={img.imagePath} alt="memoryCard" />
    </MemoryCardWrapper>
  );
};

export default MemoryCard;
