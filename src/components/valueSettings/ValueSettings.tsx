import React from 'react';
import {S} from './ValueSettings_Styles';
import {InputLabel} from "./inputLabel/InputLabel";

type ValueSettingsPropsType = {
    setStartValue: (value: number) => void
    startValue: number
    setMaxValue: (value: number) => void
    maxValue: number
    setScore: (value: number) => void
    score: number
}

export const ValueSettings = (props: ValueSettingsPropsType) => {
    return (
        <S.ValueSettingsContainer>
            <InputLabel
                setNewValue={props.setMaxValue}
                newValue={props.maxValue}
                htmlFor={"max"} text={"max value:"}
                id={"max"}/>
            <InputLabel
                setNewValue={props.setStartValue}
                newValue={props.startValue}
                htmlFor={"start"} text={"start value:"}
                id={"start"}/>
        </S.ValueSettingsContainer>
    );
};