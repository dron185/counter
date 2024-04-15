import React from 'react';
import {S} from './ValueSettings_Styles';
import {InputLabel} from "./inputLabel/InputLabel";

type ValueSettingsPropsType = {
    setRestriction: (restriction: number)=>void
}

export const ValueSettings = (props: ValueSettingsPropsType) => {
    return (
        <S.ValueSettingsContainer>
            <InputLabel setRestriction={props.setRestriction} htmlFor={"max"} text={"max value:"} id={"max"}/>
            <InputLabel setRestriction={props.setRestriction} htmlFor={"start"} text={"start value:"} id={"start"}/>
        </S.ValueSettingsContainer>
    );
};