import styled from 'styled-components';
import { colors } from './cssVariables';

export const BaseH1 = styled.h1`
  font-size: 1.7rem;
  line-height: 2rem;
  text-align: center;
`;

export const BaseH2 = styled.h2`
  font-size: 1.5rem;
`;

export const BaseH3 = styled.h3`
  font-size: 1.2rem;
`;

interface ButtonProps {
  styleType?: 'primary';
}

export const BaseButton = styled.button<ButtonProps>`
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

export const BaseSvgButton = styled.button`
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

export const BaseLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 600;
  gap: 0.3rem;
`;

export const BaseInput = styled.input`
  border: 1px solid ${colors.lightGray};
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  font-weight: normal;
  font-size: 0.9rem;
`;

export const BaseTextarea = styled.textarea`
  border: 1px solid ${colors.lightGray};
  padding: 0.5rem;
  border-radius: 0.2rem;
  font-weight: normal;
  height: 5rem;
  font-size: 0.9rem;
  line-height: 1.1rem;
`;
