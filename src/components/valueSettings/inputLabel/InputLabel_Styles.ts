import styled from "styled-components";

const InputLabel = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
`
const TextValue = styled.label`
    font-weight: 600;
    color: #148383;
`
const Input = styled.input`
    max-width: 250px;
    border: 3px solid #148383;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
`

export const S = {
    TextValue,
    InputLabel,
    Input,
}