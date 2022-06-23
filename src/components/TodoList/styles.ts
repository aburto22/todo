import styled from 'styled-components';
import { BaseH2 } from '@styles/common';

export const Subheading = styled(BaseH2)`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ListItem = styled.li`
  display: block;
  max-width: 100%;
`;
