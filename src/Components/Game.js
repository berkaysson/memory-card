import MemoryCard from "./MemoryCard";
import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import React, { useState, useEffect } from "react";
import images from "../Data/MemoryCardsData";
import InfoBar from "./InfoBar";
import ModalGame from "./ModalGame";

const Game = () => {
  const [currentCards, setcurrentCards] = useState([]);
  const [infoText, setInfoText] = useState('Challenge yourself and improve your memory!');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(parseInt(localStorage.getItem("bestScore")) || 0);
  const [gameContent, setGameContent] = useState(currentCards);
  
  let cards = [];

  const CARD_NUMBER = 8;

  useEffect(() => {
    setRandomCards();
    setcurrentCards(cards);
  }, []); // not a problem

  useEffect(()=>{
    setGameContent(currentCards);
  }, [currentCards])

  useEffect(()=>{
    if(score>bestScore){
      localStorage.setItem("bestScore", score);
      setBestScore(score);
    }
  }, [bestScore, score])

  const onClickCard = (img) => {
    if(isFail(img)){
      setInfoText('You lose!');
      setGameContent(<ModalGame onRestart={resetGame} />);
      return;
    }
    img.selected = true;
    cards = shuffleCards(cards);
    setcurrentCards(cards);
    setScore((prevScore)=>prevScore+1);//use localStorage
    checkWin()
  }

  const checkWin = () => {
    for(let card of cards){
      if(card.props.img.selected === false) return
    }
    setInfoText('You did it, You Win !');
    setGameContent(<ModalGame onRestart={resetGame} />);
  }

  const resetGame = () => {
    images.forEach(img => {
      img.selected = false;
    });
    setInfoText('Challenge yourself and improve your memory!');
    setRandomCards();
    setScore(0);
    setcurrentCards(cards);
  }

  const isFail = (img) => {
    if(img.selected) return true;
    return false;
  }

  const shuffleCards = (array) => {
    let shuffleCards = [...array];
    for (let i = shuffleCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleCards[i], shuffleCards[j]] = [shuffleCards[j], shuffleCards[i]];
    }
    return shuffleCards;
  }

  const setRandomCards = () => {
    let uniqueCards = [...images];
    cards = [...Array(CARD_NUMBER)].map((_, index) => {
      const randomIndex = Math.floor(Math.random() * uniqueCards.length);
      const randomImage = uniqueCards[randomIndex];
      uniqueCards.splice(randomIndex, 1);
      return <MemoryCard key={index} img={randomImage} onClick={onClickCard} />
    });
  }

  return (
    <GameWrapper>
      <ScoreBoard score={score} bestScore={bestScore}/>
      <InfoBar text={infoText}/>
      <GameContentWrapper>{gameContent}</GameContentWrapper>
    </GameWrapper>
  );
};

export default Game;


const GameContentWrapper = styled.div`
  display: grid;
  grid-template-columns:repeat(4,202px);
  grid-template-rows:repeat(2,1fr);
  justify-content:center;
  align-items:center;
  gap:var(--gap);
`
const GameWrapper = styled.div`
  text-align:center;
  padding:calc(var(--padding-lg)/1.25) var(--padding-lg) ;
  border-radius:var(--button-border-radius);
  box-shadow: rgba(256, 256, 256, 0.4) 0px 0px 8px, rgba(256, 256, 256, 0.3) 0px 0px 8px -1px, rgba(256, 256, 256, 0.2) 0px -3px 0px inset;
  backdrop-filter: blur(10px) brightness(2.5) contrast(0.9);
`