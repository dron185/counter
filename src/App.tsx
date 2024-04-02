import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard";
import {IncBtn} from "./components/IncBtn";
import {ResetBtn} from "./components/ResetBtn";
import {Button} from "./components/Button";

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

    const incHandler = () => {
        inc(score)
    }

    const resetHandler = () => {
        reset(score)
    }

    const incButtonDisabled = score === 5
    const resButtonDisabled = score === 0

  return (
    <div className="App">
        <Scoreboard score={score}/>
        {/*<IncBtn score={score} inc={inc} disable={incButtonDisabled}/>*/}
        {/*<ResetBtn score={score} reset={reset} disable={resButtonDisabled}/>*/}
        <Button title={"inc"} disable={incButtonDisabled} onClickHandler={incHandler}/>
        <Button title={"reset"} disable={resButtonDisabled} onClickHandler={resetHandler}/>
    </div>
  );
}

export default App;
