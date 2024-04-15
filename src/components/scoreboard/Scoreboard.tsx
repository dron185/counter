import React from 'react';
import styled from "styled-components";

type ScoreboardProps = {
    score: number
    value: number
}

export const Scoreboard = (props: ScoreboardProps) => {
    return (
        <StyleScoreboard>
            <Score style={{color: props.score === props.value ? "red" : ""}}>{props.score}</Score>
        </StyleScoreboard>
    );
};

const StyleScoreboard = styled.div`
    margin-bottom: 20px;
    border: 5px solid #148383;
    border-radius: 15px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Score = styled.span`
    font-size: 60px;
    font-weight: 600;
    color: #148383;
`