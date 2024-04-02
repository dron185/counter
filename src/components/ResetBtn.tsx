import React from 'react';

type ResetBtnProps = {
    reset: (score: number)=> void
    score: number
    disable: boolean
}

const s = {
    backgroundColor: "yellow",
    width: "60px",
    borderRadius: "5px"
}

export const ResetBtn = (props: ResetBtnProps) => {
    return (
        <button style={s} disabled={props.disable} onClick={()=>{props.reset(props.score)}}>
            Reset
        </button>
    );
};