import styled from 'styled-components';
import { dimensions } from './cssVariables';
import { BaseH1, BaseH6 } from './common';

export const Main = styled.main`
  padding: 1rem;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
  }
`;

export const Title = styled(BaseH1)`
  margin: 1.5rem 0 ;
`;

export const Section = styled.section`
  padding: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${dimensions.mobileBreak}){
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const InfoContainer = styled.div`
  width: max-content;
  margin: 0 auto 2rem;
`;

export const Info = styled(BaseH6)`

`;
