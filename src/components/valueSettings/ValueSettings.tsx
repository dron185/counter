import React from 'react';
import {S} from './ValueSettings_Styles';
import {InputLabel} from "./inputLabel/InputLabel";

type ValueSettingsPropsType = {
    setRestriction: (value: number) => void
    restriction: number
}

export const ValueSettings = (props: ValueSettingsPropsType) => {
    // здесь написать 2 ф. передать сюда setScore


    return (
        <S.ValueSettingsContainer>
            <InputLabel
                setRestriction={props.setRestriction}
                restriction={props.restriction}
                htmlFor={"max"} text={"max value:"}
                id={"max"}/>
            <InputLabel
                setRestriction={props.setRestriction}
                restriction={props.restriction}
                htmlFor={"start"} text={"start value:"}
                id={"start"}/>
        </S.ValueSettingsContainer>
    );
};