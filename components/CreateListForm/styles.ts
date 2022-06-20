import styled from 'styled-components';
import { dimensions, boxShadow } from '@styles/cssVariables';
import {
  BaseH2, BaseButton, BaseLabel, BaseInput, BaseTextarea,
} from '@styles/common';

export const Form = styled.form`
  max-width: 25rem;
  margin: 0 auto;
  box-shadow: ${boxShadow.insetMobile};
  padding: 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
    box-shadow: ${boxShadow.inset};
  }
`;

export const Title = styled(BaseH2)`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Label = styled(BaseLabel)`
  margin-bottom: 1rem;
`;

export const Input = styled(BaseInput)`

`;

export const Textarea = styled(BaseTextarea)`

`;

export const SubmitButton = styled(BaseButton)`
  margin: 0 auto;
`;
