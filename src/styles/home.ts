import styled from 'styled-components';
import { dimensions, colors } from './cssVariables';
import { BaseH1, BaseH6, BaseSvgToggleButton } from './common';

export const Main = styled.main`
  padding: 1rem;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
  }
`;

export const Title = styled(BaseH1)`
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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
  margin: 0 auto 1rem;
`;

export const Info = styled(BaseH6)`

`;

export const FreezeButton = styled(BaseSvgToggleButton)`
  margin: 0.5rem auto 0;
`;

export const WarningIcon = styled.div`
  color: ${colors.red};
  height: 2rem;
  width: 2rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
