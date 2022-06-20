import styled from 'styled-components';
import { dimensions } from '@styles/cssVariables';

export const App = styled.div`
  background-color: red;
  display: grid;
  grid-template-rows: ${dimensions.headerHeight} 1fr ${dimensions.footerHeight};
  min-height: 100vh;
`;
