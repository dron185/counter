import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {Button} from "./components/button/Button";
import {ButtonContainer} from './components/ButtonContainer';
import {CounterContainer} from './components/CounterContainer';
import {ValueSettings} from './components/valueSettings/ValueSettings';

function App() {

    const [score, setScore] = useState(0)
    const [restriction, setRestriction] = useState(5)

    const inc = (score: number) => {
        score += 1;
        (score > restriction) && (score = restriction);
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
    const incButtonDisabled = score === restriction

    return (
        <div className="App">
            <CounterContainer>
                <ValueSettings setRestriction={setRestriction}/>
                <ButtonContainer>
                    <Button title={"set"} />
                </ButtonContainer>
            </CounterContainer>
            <CounterContainer>
                <Scoreboard score={score} restriction={restriction}/>
                <ButtonContainer>
                    <Button title={"inc"} disable={incButtonDisabled} onClickHandler={incHandler}/>
                    <Button title={"reset"} onClickHandler={resetHandler}/>
                </ButtonContainer>
            </CounterContainer>
        </div>
    );
}

export default App;
