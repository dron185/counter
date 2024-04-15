import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {Button} from "./components/button/Button";
import {ButtonContainer} from './components/ButtonContainer';
import {CounterContainer} from './components/CounterContainer';
import {ValueSettings} from './components/valueSettings/ValueSettings';

function App() {

    const [score, setScore] = useState(0)
    const [restriction, setRestriction] = useState(0)
    const [value, setValue] = useState(5)

    const inc = (score: number) => {
        score += 1;
        (score > value) && (score = value);
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
    const incButtonDisabled = score === value

    const callBackButtonHandler = () => {
        setValue(restriction)
    }

    return (
        <div className="App">
            <CounterContainer>
                <ValueSettings setRestriction={setRestriction} restriction={restriction}/>
                <ButtonContainer>
                    <Button name={"set"} callBack={callBackButtonHandler}/>
                </ButtonContainer>
            </CounterContainer>
            <CounterContainer>
                <Scoreboard score={score} value={value}/>
                <ButtonContainer>
                    <Button name={"inc"}
                            disable={incButtonDisabled}
                            callBack={incHandler}/>
                    <Button name={"reset"}
                            callBack={resetHandler}/>
                </ButtonContainer>
            </CounterContainer>
        </div>
    );
}

export default App;
