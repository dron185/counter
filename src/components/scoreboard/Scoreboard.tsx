import React from 'react';
import {S} from './Scoreboard_Styles';

type ScoreboardProps = {
    score: number
    value: number
    changedValue: boolean
    startValue: number
    maxValue: number
    // setError: (value: string) => void
    // error: string | null
}

export const Scoreboard = (props: ScoreboardProps) => {

    return (
        <S.StyleScoreboard>
            <S.ScoreText>

                {
                 props.startValue >= 0 && props.startValue < props.maxValue ?
                     ( props.changedValue ? "enter values and press 'set'" :
                         <S.Score style={{color: props.score === props.value ? "red" : ""}}>{props.score}</S.Score> ) :
                     <S.WarningSpan>Incorrect value!</S.WarningSpan>
                }


                {/*{*/}
                {/*    props.startValue >= 0 && props.startValue < props.maxValue ?*/}
                {/*        ( <S.Score style={{color: props.score === props.value ? "red" : ""}}>*/}
                {/*            {props.error ? props.error : props.score}*/}
                {/*        </S.Score> ) :*/}
                {/*        <S.WarningSpan>Incorrect value!</S.WarningSpan>*/}
                {/*}*/}

            </S.ScoreText>
        </S.StyleScoreboard>
    );
};


