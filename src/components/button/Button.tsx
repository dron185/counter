import React from 'react';
import styled from "styled-components";
import { S } from './Button_Styles';

type ButtonPropsType = {
    title: string
    disable: boolean
    onClickHandler?: ()=> void
}

export const Button = ({title, disable, onClickHandler}: ButtonPropsType) => {
    return (
        <S.Button disabled={disable} onClick={onClickHandler}>{title}</S.Button>
    );
};

// const StyledButton = styled.button`
//     border-radius: 10px;
//     display: flex;
//     min-height: 48px;
//     justify-content: center;
//     align-items: center;
//     font-size: 14px;
//     line-height: 150%;
//     font-weight: 700;
//     padding: 5px 36px;
//     text-align: center;
// `