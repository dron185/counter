import React from 'react';


type IncBtnPropsType = {
    inc: (score: number) => void
    score: number
    disable: boolean
}

const s = {
    backgroundColor: "aquamarine",
    width: "60px",
    marginRight: "20px",
    borderRadius: "5px"
}

export const IncBtn = (props: IncBtnPropsType) => {
    return (
        <button style={s} disabled={props.disable} onClick={()=>{props.inc(props.score)}}>
            Inc
        </button>
    );
};