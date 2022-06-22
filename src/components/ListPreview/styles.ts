import { colors } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseSvgButton } from '@styles/common';

export const Container = styled.article`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  background-color: ${colors.blue};
  color: ${colors.white};
  transition: all 300ms;
  text-align: left;
  border-radius: 0.5rem;

  :hover {
    transform: scale(1.05);
  }
`;

export const Link = styled.a`
  display: block;
  padding: 1rem 2rem;
  width: 100%;
`;

export const Side = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.2rem;
  background-color: white;
  border: 1px solid ${colors.blue};
  color: ${colors.black};
  padding: 0 0.2rem;
  border-radius:  0 0.5rem 0.5rem 0;
`;

export const DeleteButton = styled(BaseSvgButton)`
  border-radius: 0.5rem;
`;

export const FreezeButton = styled(BaseSvgButton)`
  border-radius: 0.5rem;
`;
