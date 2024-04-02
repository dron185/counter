import React from 'react';

type ButtonPropsType = {
    title: string
    disable: boolean
    onClickHandler?: ()=> void
}

export const Button = ({title, disable, onClickHandler}: ButtonPropsType) => {
    return (
        <button disabled={disable} onClick={onClickHandler}>{title}</button>
    );
};