import styled from "styled-components";

const MemoryCardWrapper = styled.div`
  border: 1px black solid;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  cursor:pointer;

  &:hover{
    opacity:0.9;
  }

  & img {
    aspect-ratio:1/1;
    width: 200px;
    height: auto;
  }
`

const MemoryCard = ({img, onClick}) => {
  return (
    <MemoryCardWrapper onClick={()=>onClick(img)}>
      {img.name}
      <img src={img.imagePath} alt="memoryCard" />
    </MemoryCardWrapper>
  );
}

export default MemoryCard;