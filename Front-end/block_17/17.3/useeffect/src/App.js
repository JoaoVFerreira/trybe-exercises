import React from "react";
import useTimer from './useTimer'

function App() {
  const { number, isMultiple, timer } = useTimer();

  return (
    <div>
      <p>{`Número randômico: ${number}`}</p>
      <p>{isMultiple && 'acerto'}</p>
      <p>Tempo: {timer}</p>
    </div>
  );
}

export default App;