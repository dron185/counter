import React from 'react';

type ScoreboardProps = {
    score: number
}

const s = {
    marginBottom: "20px",
    fontSize: "50px",
    border: "2px solid brown",
    borderRadius: "10px"
}

export const Scoreboard = (props: ScoreboardProps) => {
    return (
        <div style={s}>
            {props.score}
        </div>
    );
};