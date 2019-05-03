import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ScoreHeader from './components/ScoreHeader';
import Rules from './components/Rules';
import Game from './components/Game';
import Footer from './components/Footer';
import initialImages from './images.json';
import { shuffleArr } from './helpers';

const theme = {
  red: '#FF0000',
  white: '#f0f0f0',
  black: '#1b1b1b',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)', 
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'arial';
    background-color: ${theme.offWhite}
  }
`;

function App() {
  const [ pickedImages, setPickedImages ] = useState([]);
  const [ topScore, setTopScore ] = useState(0);
  const [ headerMsg, setHeaderMsg ] = useState('Click an image to begin');
  const [ images, setImages ] = useState(shuffleArr([...initialImages]));

  const gameOver = () => {
    const score = pickedImages.length;
    score === 9 ? 
      setHeaderMsg('You won! Play again by clicking an image.')
      : setHeaderMsg(`You lost. Your score was ${score}. Click an image to play again.`);
    if (score > topScore) {
      setTopScore(score);
    }
    setPickedImages([]);
  }
  
  const correctAnswer = picked => {
    pickedImages.length === 0
      ? setHeaderMsg("Good luck!")
      : setHeaderMsg("Correct! Pick another image.");
    setPickedImages([ ...pickedImages, picked ]);
  }

  const handleClick = pickedId => {
    setImages(shuffleArr(initialImages))
    pickedImages.includes(pickedId)
      ? gameOver()
      : correctAnswer(pickedId);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ScoreHeader score={pickedImages.length} topScore={topScore}>
          {headerMsg}
        </ScoreHeader>
        <Rules />
        <Game
          images={images}
          pickedImages={pickedImages}
          handleClick={handleClick}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
