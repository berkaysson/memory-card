import './App.css';
import Game from './Components/Game';
import Header from './Components/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Game />
    </AppWrapper>
  );
}

export default App;
