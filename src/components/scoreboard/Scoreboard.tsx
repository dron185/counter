import React from 'react';
import {S} from './Scoreboard_Styles';

type ScoreboardProps = {
    score: number
    value: number
}

export const Scoreboard = (props: ScoreboardProps) => {
    return (
        <S.StyleScoreboard>
            <S.Score style={{color: props.score === props.value ? "red" : ""}}>{props.score}</S.Score>
        </S.StyleScoreboard>
    );
};