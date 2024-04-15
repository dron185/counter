import styled from "styled-components";

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

export const S = {
    StyleScoreboard,
    Score,
}