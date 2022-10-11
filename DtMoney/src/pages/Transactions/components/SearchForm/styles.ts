import { FileX } from "phosphor-react";
import styled from "styled-components";

export const SeachFormContainer = styled.form`
display: flex;
gap: 1rem;



input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${probs => probs.theme['gray-900']};
    color: ${probs => probs.theme['gray-300']};
    padding: 1rem;


    &::placeholder {
        color: ${probs => probs.theme['gray-500']};
    }
}

button {
    display: flex;
    align-items: center;
    gap: 0.75rem;


    border: 0;
    padding: 1rem;
    background:transparent;
    border: 1px solid ${probs => probs.theme['green-300']};
    color: ${probs => probs.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;

    :hover{
        background: ${probs => probs.theme['green-500']};
        border-color: 1px solid ${probs => probs.theme['green-500']};
        color: ${probs => probs.theme.white};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

}

`;

