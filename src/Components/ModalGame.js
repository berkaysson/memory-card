import Button from "../UI/Button";
import styled from "styled-components";

const ModalGame = ({ onRestart, isWin }) => {
  return (
    <Modal>
      <Button onClick={()=>onRestart(isWin)} text={"New Game"} />
    </Modal>
  );
};

const Modal = styled.div`
  display: flex;
  margin-top:var(--margin);
  justify-content:center;
  align-items: center;
  grid-column: 1/5 ;
  grid-row:1/3;
`

export default ModalGame;
