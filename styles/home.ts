import styled from 'styled-components';
import { dimensions } from './cssVariables';

export const Main = styled.main`
  padding: 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
  }
`;
