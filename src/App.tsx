import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {Button} from "./components/button/Button";
import {ButtonContainer} from './components/ButtonContainer';
import {CounterContainer} from './components/CounterContainer';
import {ValueSettings} from './components/valueSettings/ValueSettings';

function App() {

    const [score, setScore] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)


    useEffect(() => {
        getFromLocalStorageHandler()
    }, []);

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [startValue, maxValue]);

    const inc = (score: number) => {
        score += 1;
        (score > maxValue) && (score = maxValue);
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
        setScore(startValue)
        setIsDisabled(true)
    }

    // LocalStorage functions
    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem("startValue", JSON.stringify(startValue))
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    // }

    const getFromLocalStorageHandler = () => {
        let startValueAsString = localStorage.getItem("startValue")
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString);
            setStartValue(newStartValue)
        }

        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString);
            setMaxValue(newMaxValue)
        }
    }


    const callBackInputHandler = () => {
        // setToLocalStorageHandler()
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
                    callBackInput={callBackInputHandler}
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
                <Scoreboard score={score} value={maxValue}/>
                <ButtonContainer>
                    <Button
                        name={"inc"}
                        disable={score === maxValue}
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
