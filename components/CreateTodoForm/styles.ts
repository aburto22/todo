import styled from 'styled-components';
import { colors, dimensions, boxShadow } from '@styles/cssVariables';
import { H2, Button } from '@styles/common';

export const Form = styled.form`
  max-width: 35rem;
  margin: 0 auto;
  box-shadow: ${boxShadow.light};
  padding: 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
  }
`;

export const Title = styled(H2)`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  gap: 0.3rem;
`;

export const Input = styled.input`
  border: 1px solid ${colors.lightGray};
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  font-weight: normal;
  font-size: 0.9rem;
`;

export const Textarea = styled.textarea`
  border: 1px solid ${colors.lightGray};
  padding: 0.5rem;
  border-radius: 0.2rem;
  font-weight: normal;
  height: 5rem;
  font-size: 0.9rem;
  line-height: 1.1rem;
`;

export const SubmitButton = styled(Button)`
  margin: 0 auto;
`;
