import { colors, dimensions } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseButton, BaseInput, BaseTextarea } from '@styles/common';

export const Form = styled.form`
  height: 30rem;
  max-height: 80%;
  max-width: 100%;
  width: 25rem;
  display: grid;
  grid-template-rows: 5rem 2rem minmax(0, 1fr) 3.5rem;
  gap: 0.5rem;
  background-color: ${colors.white};
  padding: 0.5rem 0.5rem 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    grid-template-rows: 8rem 2rem minmax(0, 1fr) 3.5rem;
    width: 30rem;
    height: 45rem;
    padding: 1.5rem 1.5rem 2rem;
    gap: 1rem;
  }
`;

export const TitleInput = styled(BaseTextarea)`
  width: 100%;
  height: 100%;
  overflow: auto;
  font-weight: 500;
  resize: none;
  font-size: 1.1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;

export const CostInput = styled(BaseInput)`
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 0.9rem;
  line-height: 0.9rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const DescriptionInput = styled(BaseTextarea)`
  width: 100%;
  height: 100%;
  overflow: auto;
  resize: none;
  font-size: 0.9rem;
  line-height: 0.9rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 1rem;
    line-height: 1rem;
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
