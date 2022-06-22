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

export const Todo = styled.div`
  min-height: 30rem;
  height: max-content;
  max-height: 80%;
  width: max-content;
  max-width: 100%;
  min-width: 20rem;
  background-color: ${colors.white};
  padding: 1rem;
  display: grid;
  grid-template-rows: 5rem minmax(0, 1fr) 3.5rem;
  gap: 0.5rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 2rem;
    gap: 1rem;
  }
`;

export const Title = styled.p`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.lightGray};
  max-width: 100%;
  max-height: 100%;
  word-break: break-word;
  overflow: auto;
  font-size: 1.2rem;
  font-weight: 500;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding-bottom: 1rem;
  }
`;

export const Description = styled.p`
  max-width: 100%;
  max-height: 100%;
  word-break: break-word;
  overflow: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`

`;
