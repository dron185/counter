import React from 'react';
import {S} from './Scoreboard_Styles';

type ScoreboardProps = {
    score: number
    value: number
    changedValue: boolean
    startValue: number
    maxValue: number
}

export const Scoreboard = (props: ScoreboardProps) => {
    return (
        <S.StyleScoreboard>
            <S.Score style={{color: props.score === props.value ? "red" : ""}}>

                {
                 props.startValue >= 0 && props.startValue < props.maxValue ?
                     ( props.changedValue ? "enter values and press 'set'" : props.score ) :
                     <S.WarningSpan>Incorrect value!</S.WarningSpan>
                }

            </S.Score>
        </S.StyleScoreboard>
    );
};