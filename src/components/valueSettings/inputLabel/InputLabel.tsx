import React, {ChangeEvent} from 'react';
import {S} from './InputLabel_Styles';

type InputLabelPropsType = {
    htmlFor: string
    text: string
    id: string
    setRestriction: (value: number) => void
    restriction: number
}

export const InputLabel = (props: InputLabelPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        props.setRestriction(value)
    }

    return (
        <S.InputLabel>
            <S.TextValue htmlFor={props.htmlFor}>{props.text}</S.TextValue>
            <S.Input
                value={props.restriction}
                onChange={onChangeInputHandler}
                id={props.id} type="number"/>
        </S.InputLabel>
    );
};