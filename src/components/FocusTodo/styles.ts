import { colors, dimensions } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseSvgButton, BaseButton } from '@styles/common';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.overscreen};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 2rem;
`;

export const CloseButton = styled(BaseSvgButton)`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  color: ${colors.white};

  @media (min-width: ${dimensions.mobileBreak}) {
    right: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`

`;
