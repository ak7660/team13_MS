import React from 'react';

export default function Dialogs({ restartGame }) {
  return (
    <>
      <div id="summaryDialog" style={{ display: 'none' }}>
        <h2>Game Summary</h2>
        <p id="summaryContent"></p>
        <button onClick={restartGame}>Restart Game</button>
      </div>
      <div id="failureDialog" style={{ display: 'none' }}>
        <h2>You Failed</h2>
        <p>Try Again?</p>
        <button onClick={restartGame}>Restart</button>
      </div>
      <div id="introDialog" style={{ display: 'none' }}>
        <h2>Feedback Game</h2>
      </div>
    </>
  );
}