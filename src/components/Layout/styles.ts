import styled from 'styled-components';
import { dimensions, colors } from '@styles/cssVariables';

export const App = styled.div`
  background-color: ${colors.white};
  display: grid;
  grid-template-rows: ${dimensions.headerHeight} 1fr ${dimensions.footerHeight};
  min-height: 100vh;
  color: ${colors.darkGray};
  font-family: OpenSans, sans-serif;
`;
