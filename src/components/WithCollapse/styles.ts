import { colors } from '@styles/cssVariables';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isShown: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CollapseButton = styled.button`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  height: max-content;

  svg {
    width: 2rem;
    height: 2rem;
    margin-top: 0.2rem;
  }

  :hover {
    color: ${colors.blue};
  }
`;

interface ContentProps {
  isShown: boolean;
  height: number;
}

export const Content = styled.div<ContentProps>`
  height: ${({ isShown, height }) => (isShown ? `${height}px` : 0)};
  transition: height 300ms;
  overflow: hidden;
  margin-top: 1rem;
  ${({ isShown }) => isShown && css`
    margin: 1rem 0;
  `}
`;
