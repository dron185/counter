import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {Button} from "./components/button/Button";
import {ButtonContainer} from './components/ButtonContainer';
import {CounterContainer} from './components/CounterContainer';
import {ValueSettings} from './components/valueSettings/ValueSettings';

function App() {

    const [score, setScore] = useState(() => {
        let value = localStorage.getItem("startValue")
        if (value) {
            return +value
        } else {
            return 0;
        }
    })
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)

    const [changedValue, setChangedValue] = useState(false)
    // const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        let values = getFromLocalStorageHandler()
        // if (values.startValueAsString) {
        //     setScore(+values.startValueAsString)
        // }
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
        setChangedValue(false)
    }

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
        return {startValueAsString: startValueAsString, maxValueAsString: startValueAsString}
    }


    const callBackInputHandler = () => {
        // setChangedValue(true)
        // setScore(startValue)

        // startValue < 0 || startValue >= maxValue ?
        //     setError('Incorrect value!') :
        //     setError("enter values and press 'set'")
    }


    const onChangeMaxValue = (max: number) => {
        setChangedValue(true)
        setMaxValue(max);
        max <= startValue ? setIsDisabled(true) : setIsDisabled(false)
    }

    const onChangeStartValue = (start: number) => {
        setChangedValue(true)
        setStartValue(start);

        (start < 0 || start >= maxValue) ? setIsDisabled(true) : setIsDisabled(false)
    }

    return (
        <div className="App">
            <CounterContainer>
                <ValueSettings
                    setMaxValue={onChangeMaxValue}
                    maxValue={maxValue}
                    setStartValue={onChangeStartValue}
                    startValue={startValue}
                    setScore={setScore}
                    score={score}
                    setIsDisabled={setIsDisabled}
                    // callBackInput={callBackInputHandler}
                />
                <ButtonContainer>
                    <Button
                        name={"set"}
                        callBack={callBackButtonHandler}
                        // disable={isDisabled || !!error}
                        disable={isDisabled}
                    />
                </ButtonContainer>
            </CounterContainer>
            <CounterContainer>
                <Scoreboard
                    score={score}
                    value={maxValue}
                    changedValue={changedValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    // setError={setError}
                    // error={error}
                />
                <ButtonContainer>
                    <Button
                        name={"inc"}
                        disable={changedValue ? true : score === maxValue}
                        callBack={incHandler}
                    />
                    <Button
                        name={"reset"}
                        callBack={resetHandler}
                        disable={changedValue && true}
                    />
                </ButtonContainer>
            </CounterContainer>
        </div>
    );
}

export default App;


