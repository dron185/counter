import React, {ChangeEvent} from 'react';
import {S} from './InputLabel_Styles';

type InputLabelPropsType = {
    htmlFor: string
    text: string
    id: string
    setNewValue: (value: number) => void
    newValue: number
    setIsDisabled: (value: boolean) => void
}

export const InputLabel = (props: InputLabelPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        props.setNewValue(value)
        props.setIsDisabled(false)
    }

    return (
        <S.InputLabel>
            <S.TextValue htmlFor={props.htmlFor}>{props.text}</S.TextValue>
            <S.Input
                value={props.newValue}
                onChange={onChangeInputHandler}
                id={props.id} type="number"
            />
        </S.InputLabel>
    );
};