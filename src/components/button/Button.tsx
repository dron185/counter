import React from 'react';
import {S} from './Button_Styles';

type ButtonPropsType = {
    title: string
    disable?: boolean
    onClickHandler?: () => void
}

export const Button = ({title, disable, onClickHandler}: ButtonPropsType) => {
    return (
        <S.Button disabled={disable} onClick={onClickHandler}>{title}</S.Button>
    );
};