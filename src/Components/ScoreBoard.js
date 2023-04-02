const ScoreBoard = ({score, bestScore}) => {
  return <div>
    <div>Current Score: <span>{score}</span></div>
    <div>Best Score: <span>{bestScore}</span></div>
  </div>
}

export default ScoreBoard;