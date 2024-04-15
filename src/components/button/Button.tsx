import React from 'react';
import {S} from './Button_Styles';

type ButtonPropsType = {
    name: string
    disable?: boolean
    callBack: () => void
}

export const Button = ({name, disable, callBack}: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        callBack()
    }
    return (
        <S.Button disabled={disable} onClick={onClickButtonHandler}>{name}</S.Button>
    );
};