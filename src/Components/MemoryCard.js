import styled from "styled-components";

const MemoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  height: calc(var(--card-width) + 32px); //img width + 32px(16*2)
  padding-top: var(--padding);
  border-radius: var(--card-border-radius);
  box-shadow: rgba(0, 0, 0, 0.6) 0px -20px 28px 0px inset,
    rgba(150, 150, 25, 0.4) 0px -40px 25px 0px inset,
    rgba(150, 150, 25, 0.5) 0px -72px 40px 0px inset,
    rgba(0, 0, 0, 0.2) 0px 3px 2px, rgba(0, 0, 0, 0.4) 0px 5px 3px,
    rgba(0, 0, 0, 0.4) 0px 10px 5px, rgba(0, 0, 0, 0.4) 0px 20px 10px,
    rgba(0, 0, 0, 0.4) 0px 38px 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-8px) rotate(3deg);
  }

  &:hover img {
    filter: brightness(1) contrast(1.1) invert(5%);
  }

  & img {
    aspect-ratio: 1/1;
    width: var(--card-width);
    height: auto;
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
    filter: brightness(0.9) invert(12%);
  }

  @media screen and (max-width: 900px){
    &:hover {
    transform: none;
  }
}

`;

const MemoryCard = ({ img, onClick }) => {
  return (
    <MemoryCardWrapper onClick={() => onClick(img)}>
      {img.name.charAt(0).toUpperCase() + img.name.slice(1)}
      <img src={img.imagePath} alt="memoryCard" />
    </MemoryCardWrapper>
  );
};

export default MemoryCard;
