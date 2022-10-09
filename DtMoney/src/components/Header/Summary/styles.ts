import { ProhibitInset } from "phosphor-react";
import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width:100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;


    display: grid;  
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`;

    interface SummaryCardProbs {
        variant?: 'green'
    }
export const SummaryCard = styled.div<SummaryCardProbs>`
    background: ${probs => probs.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;


    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${probs => probs.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;

    }

    ${probs => probs.variant == 'green' && css`
      background: ${probs.theme['green-700']};

    `}
`;

