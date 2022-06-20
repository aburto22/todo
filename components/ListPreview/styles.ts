import { boxShadow, colors } from '@styles/cssVariables';
import styled from 'styled-components';

export const Container = styled.article`
  max-width: 40rem;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  transition: all 300ms;
  text-align: left;
  background-color: ${colors.blue};
  color: ${colors.white};

  :hover {
    transform: scale(1.05);
    box-shadow: ${boxShadow.light};
  }
`;
