import { boxShadow, colors } from '@styles/cssVariables';
import styled from 'styled-components';
import { H3, SvgButton } from '@styles/common';

export const Todo = styled.article`
  width: 17rem;
  height: 22rem;
  box-shadow: ${boxShadow.light};
  padding: 1rem;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  transition: transform 300ms;

  :hover {
    transform: scale(1.05);
  }
`;

export const Title = styled(H3)`
  margin-bottom: 1rem;
  color: ${colors.black};
  max-height: 15rem;
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

export const DoneButton = styled(SvgButton)`

`;

export const EditButton = styled(SvgButton)`

`;

export const DeleteButton = styled(SvgButton)`

`;
