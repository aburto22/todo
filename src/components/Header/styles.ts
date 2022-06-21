import styled from 'styled-components';
import { colors } from '@styles/cssVariables';

export const Header = styled.header`
  border-bottom: 1px solid ${colors.gray};
  padding: 0 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 50rem;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-right: auto;
`;
