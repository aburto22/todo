import { colors, dimensions } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseButton, BaseTextarea } from '@styles/common';

export const Form = styled.form`
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
  padding: 0.5rem 0.5rem 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    min-width: 25rem;
    min-height: 30rem;
    padding: 1.5rem 1.5rem 2rem;
    gap: 1rem;
  }
`;

export const TitleInput = styled(BaseTextarea)`
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 1.2rem;
  font-weight: 500;
  resize: none;
`;

export const DescriptionInput = styled(BaseTextarea)`
  width: 100%;
  height: 100%;
  overflow: auto;
  resize: none;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`

`;
