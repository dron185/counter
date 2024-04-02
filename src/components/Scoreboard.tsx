import React from 'react';
import styled from "styled-components";

type ScoreboardProps = {
    score: number
}


export const Scoreboard = (props: ScoreboardProps) => {
    return (
        <StyleScoreboard>
            {props.score}
        </StyleScoreboard>
    );
};


const StyleScoreboard = styled.div`
    margin-bottom: 20px;
    font-size: 50px;
    border: 5px solid #148383;
    border-radius: 15px;
`