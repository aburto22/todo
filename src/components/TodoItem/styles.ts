import { boxShadow, colors } from '@styles/cssVariables';
import styled, { css } from 'styled-components';
import { BaseH3, BaseSvgButton } from '@styles/common';

interface TodoProps {
  done: boolean;
}

export const Todo = styled.article<TodoProps>`
  width: 17rem;
  height: 22rem;
  box-shadow: ${boxShadow.light};
  padding: 1rem;
  word-break: break-word;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 1.5rem;
  gap: 0.5rem;
  transition: transform 300ms;
  ${({ done }) => done && css`
    background-color: ${colors.lightGray};
  `}

  :hover {
    transform: scale(1.05);
  }
`;

interface ContentProps {
  done: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;

export const Title = styled(BaseH3)`
  margin-bottom: 1rem;
  color: ${colors.black};
  max-height: 13.5rem;
  line-height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.2rem;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  margin-left: auto;
`;

export const DoneButton = styled(BaseSvgButton)`

`;

export const ExpandButton = styled(BaseSvgButton)`

`;

export const DeleteButton = styled(BaseSvgButton)`

`;
