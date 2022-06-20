import { boxShadow, colors } from '@styles/cssVariables';
import styled from 'styled-components';
import { H3 } from '@styles/common';

export const Todo = styled.article`
  width: 15rem;
  height: 20rem;
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
  font-size: 0.8rem;
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
