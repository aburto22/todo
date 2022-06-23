import styled from 'styled-components';
import { boxShadow, dimensions } from '@styles/cssVariables';
import { BaseLinkButton } from '@styles/common';

export const Header = styled.header`
  padding: 0 1rem;
  box-shadow: ${boxShadow.light};
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
  font-size: 1.5rem;
  margin-right: auto;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 1.7rem;
  }
`;

export const LogoutButton = styled(BaseLinkButton)`

`;
