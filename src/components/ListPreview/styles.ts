import { colors, dimensions } from '@styles/cssVariables';
import styled from 'styled-components';
import { BaseSvgButton, BaseSvgToggleButton } from '@styles/common';

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
  padding: 0.6rem 0.7rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9rem;

  @media (min-width: ${dimensions.mobileBreak}) {
    padding: 1rem 2rem;
    font-size: 1.1rem
  }
`;

export const Side = styled.div`
  margin-left: auto;
  display: flex;
  background-color: white;
  border: 1px solid ${colors.blue};
  padding: 0 0.2rem;
  border-radius:  0 0.5rem 0.5rem 0;
  color: ${colors.darkGray};
`;

export const DeleteButton = styled(BaseSvgButton)`
  border-radius: 0.5rem;
`;

export const FreezeButton = styled(BaseSvgToggleButton)`
  border-radius: 0.5rem;
`;
