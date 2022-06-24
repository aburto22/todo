import { colors, dimensions } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseButton } from '@styles/common';

export const Todo = styled.div`
  height: 30rem;
  max-height: 80%;
  max-width: 100%;
  width: 25rem;
  display: grid;
  grid-template-rows: 5rem minmax(0, 1fr) 3.5rem;
  gap: 0.5rem;
  background-color: ${colors.white};
  padding: 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    grid-template-rows: 8rem minmax(0, 1fr) 3.5rem;
    width: 30rem;
    height: 45rem;
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
  font-size: 1.1rem;
  font-weight: 500;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  max-width: 100%;
  max-height: 100%;
  word-break: break-word;
  overflow: auto;
  font-size: 0.9rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`

`;
