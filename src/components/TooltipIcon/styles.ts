import { colors, boxShadow } from '@styles/cssVariables';
import styled, { css } from 'styled-components';

interface TooltipProps {
  position?: 'top' | 'bottom' | 'right' | 'left';
}

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  display: none;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: 1px solid ${colors.white};
  font-size: 0.9rem;
  padding: 0.5rem;
  width: 10rem;
  line-height: 1rem;
  border-radius: 0.5rem;
  box-shadow: ${boxShadow.light};

  ${({ position }) => {
    if (position === 'bottom') {
      return css`
        top: 100%;
        right: 50%;
        transform: translateX(50%);
      `;
    }
    if (position === 'top') {
      return css`
        bottom: 100%;
        right: 50%;
        transform: translateX(50%);
      `;
    }
    if (position === 'left') {
      return css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
      `;
    }
    return css`
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    `;
  }}
`;

export const Container = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  :hover + ${Tooltip} {
    display: block;
  }
`;
