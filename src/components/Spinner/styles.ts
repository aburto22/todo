import styled, { css } from 'styled-components';
import { colors } from '@styles/cssVariables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SpinnerProps {
  size?: 'normal';
}

export const Spinner = styled.div<SpinnerProps>`
  ${() => css`
    width: 5rem;
    height: 5rem;
  `}
  border-radius: 50%;
  border-width: 0.5rem;
  border-style: solid;
  border-top-color: ${colors.blue};
  border-bottom-color: ${colors.blue};
  border-right-color: ${colors.lightGray};
  border-left-color: ${colors.lightGray};

  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
