import styled from 'styled-components';
import { dimensions } from './cssVariables';

export const Main = styled.main`
  padding: 1rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
  }
`;

export const Section = styled.section`
  padding: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${dimensions.mobileBreak}){
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;
