import styled from "styled-components";

const ScoreBoard = ({score, bestScore}) => {
  return <ScoreBoardWrapper>
    <div>Current Score: <span>{score}</span></div>
    <div>Best Score: <span>{bestScore}</span></div>
  </ScoreBoardWrapper>
}

const ScoreBoardWrapper = styled.div`
  display: flex;
  flex-direction:row ;
  justify-content:space-between;
  align-items: center;
  font-size:var(--font-lg);
  padding: var(--padding);
`

export default ScoreBoard;