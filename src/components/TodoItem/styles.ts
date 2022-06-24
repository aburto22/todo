import { boxShadow, colors, dimensions } from '@styles/cssVariables';
import styled, { css } from 'styled-components';
import { BaseH3, BaseSvgButton } from '@styles/common';

interface TodoProps {
  done: boolean;
}

export const Todo = styled.article<TodoProps>`
  width: 45rem;
  max-width: 100%;
  box-shadow: ${boxShadow.light};
  padding: 0.5rem;
  word-break: break-word;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 6rem;
  gap: 0.5rem;
  transition: transform 300ms;
  ${({ done }) => done && css`
    background-color: ${colors.lightGray};
  `}

  :hover {
    ${({ done }) => !done && css`
      transform: scale(1.05);
    `}
  }
`;

interface ContentProps {
  done: boolean;
}

export const Content = styled.button<ContentProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  gap: 0.1rem;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `}

  @media (min-width: ${dimensions.mobileBreak}) {
    gap: 0.3rem;
  }
`;

export const Title = styled(BaseH3)`
  color: ${colors.black};
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0.1rem;
  max-width: 100%;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 0.7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  padding: 0.1rem;
  max-width: 100%;

  @media (min-width: ${dimensions.mobileBreak}) {
    font-size: 0.9rem;
  }
`;

export const DateInfo = styled.div`
  display: flex;
  gap: 0.2rem;
  font-size: 0.6rem;
  font-weight: 600;
  color: ${colors.gray};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const DoneButton = styled(BaseSvgButton)`

`;

export const DeleteButton = styled(BaseSvgButton)`

`;
