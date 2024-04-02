import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard";
import {IncBtn} from "./components/IncBtn";
import {ResetBtn} from "./components/ResetBtn";

function App() {

    const [score, setScore] = useState(0)

    const inc = (score: number) => {
      score++;
      if(score > 5) {
          score = 5;
      }
      setScore(score)
    }

    const reset = (score: number) => {
        score = 0;
        setScore(score)
    }

    const incButtonDisabled = score === 5
    const resButtonDisabled = score === 0

  return (
    <div className="App">
        <Scoreboard score={score}/>
        <IncBtn score={score} inc={inc} disable={incButtonDisabled}/>
        <ResetBtn score={score} reset={reset} disable={resButtonDisabled}/>
    </div>
  );
}

export default App;
