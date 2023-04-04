import Button from "../UI/Button";

const ModalGame = ({ onRestart }) => {
  return (
    <div>
      <Button onClick={onRestart} text={"New Game"} />
    </div>
  );
};

export default ModalGame;
