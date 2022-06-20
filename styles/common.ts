import styled from 'styled-components';
import { colors } from './cssVariables';

export const H1 = styled.h1`

`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
`;

interface ButtonProps {
  styleType?: 'primary';
}

export const Button = styled.button<ButtonProps>`
  padding: 0.7rem 1.5rem;
  border: 2px solid ${colors.blue};
  transition: transform 300ms;
  border-radius: 0.3rem;
  display: block;

  ${({ styleType }) => {
    if (styleType === 'primary') {
      return `
        background-color: ${colors.blue};
        color: ${colors.white};
      `;
    }
    return `
      color: ${colors.blue};
    `;
  }}

  :hover {
    transform: scale(1.08);
  }
`;

export const SvgButton = styled.button`
  padding: 0.3rem;
  transition: transform 300ms;
  border-radius: 0.3rem;
  display: block;
  width: 2rem;
  height: 2rem;

  svg {
    height: 100%;
    width: 100%;
  }

  :hover {
    color: ${colors.blue};
  }
`;
