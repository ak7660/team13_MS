import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Dialogs from './components/Dialogs';
import './styles.css';

function Game() {
  const [score, setScore] = useState(0);

  const restartGame = () => {
    document.getElementById('summaryDialog').style.display = 'none';
    document.getElementById('failureDialog').style.display = 'none';
    setScore(0);
  };

  const updateScore = (newScore) => {
    setScore(newScore);
    document.getElementById('score').innerText = `Score: ${newScore}`;
  };

  return (
    <div>
      <div id="score">Score: {score}</div>
      <Canvas restartGame={restartGame} updateScore={updateScore} />
      <Dialogs restartGame={restartGame} />
    </div>
  );
}

export default Game;