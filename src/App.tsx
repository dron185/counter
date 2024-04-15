import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {Button} from "./components/button/Button";
import {ButtonContainer} from './components/ButtonContainer';
import {CounterContainer} from './components/CounterContainer';
import {ValueSettings} from './components/valueSettings/ValueSettings';

function App() {

    const [score, setScore] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState(5)
    const [isDisabled, setIsDisabled] = useState(false)

    const inc = (score: number) => {
        score += 1;
        (score > value) && (score = value);
        setScore(score)
    }
    const reset = (score: number) => {
        score = startValue;
        setScore(score)
    }
    const incHandler = () => {
        inc(score)
    }
    const resetHandler = () => {
        reset(score)
    }

    const callBackButtonHandler = () => {
        setValue(maxValue)
        setScore(startValue)
        setIsDisabled(true)
    }

    return (
        <div className="App">
            <CounterContainer>
                <ValueSettings
                    setMaxValue={setMaxValue}
                    maxValue={maxValue}
                    setStartValue={setStartValue}
                    startValue={startValue}
                    setScore={setScore}
                    score={score}
                    setIsDisabled={setIsDisabled}
                />
                <ButtonContainer>
                    <Button
                        name={"set"}
                        callBack={callBackButtonHandler}
                        disable={isDisabled}
                    />
                </ButtonContainer>
            </CounterContainer>
            <CounterContainer>
                <Scoreboard score={score} value={value}/>
                <ButtonContainer>
                    <Button
                        name={"inc"}
                        disable={score === value}
                        callBack={incHandler}
                    />
                    <Button
                        name={"reset"}
                        callBack={resetHandler}
                    />
                </ButtonContainer>
            </CounterContainer>
        </div>
    );
}

export default App;
