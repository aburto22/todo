import { colors, dimensions } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseButton } from '@styles/common';

export const Todo = styled.div`
  min-height: 25rem;
  height: max-content;
  max-height: 80%;
  width: max-content;
  max-width: 100%;
  min-width: 18rem;
  display: grid;
  grid-template-rows: 5rem minmax(0, 1fr) 3.5rem;
  gap: 0.5rem;
  background-color: ${colors.white};
  padding: 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    min-width: 25rem;
    min-height: 30rem;
    padding: 2rem;
    gap: 1rem;
  }
`;

export const Title = styled.p`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.lightGray};
  max-width: 100%;
  max-height: 100%;
  word-break: break-word;
  overflow: auto;
  font-size: 1.2rem;
  font-weight: 500;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding-bottom: 1rem;
  }
`;

export const Description = styled.p`
  max-width: 100%;
  max-height: 100%;
  word-break: break-word;
  overflow: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`

`;
