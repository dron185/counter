import React, {ChangeEvent} from 'react';
import { S } from './InputLabel_Styles';

type InputLabelPropsType = {
    htmlFor: string
    text: string
    id: string
    setRestriction: (restriction: number)=>void
}

export const InputLabel = (props: InputLabelPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        props.setRestriction(value)
    }

    return (
        <S.InputLabel>
            <S.TextValue htmlFor={props.htmlFor}>{props.text}</S.TextValue>
            <S.Input id={props.id} type="number" onChange={onChangeHandler}/>
        </S.InputLabel>
    );
};

