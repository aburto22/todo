import styled, { css } from 'styled-components';
import { colors, dimensions } from './cssVariables';

export const BaseH1 = styled.h1`
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align: center;

  @media (min-width: ${dimensions.mobileBreak}){
    font-size: 1.7rem;
    line-height: 2rem;
  }
`;

export const BaseH2 = styled.h2`
  font-size: 1.2rem;

  @media (min-width: ${dimensions.mobileBreak}){
    font-size: 1.5rem;
    line-height: 1.7rem;
  }
`;

export const BaseH3 = styled.h3`
  font-size: 1.1rem;

  @media (min-width: ${dimensions.mobileBreak}){
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

export const BaseH6 = styled.h6`
  color: ${colors.black};
  font-size: 0.9rem;
  font-weight: 600;
`;

interface ButtonProps {
  styleType?: 'primary' | 'success' | 'danger';
  disabled?: boolean;
}

export const BaseButton = styled.button<ButtonProps>`
  padding: 0.7rem 1.5rem;
  border: 2px solid ${colors.blue};
  transition: transform 300ms;
  border-radius: 0.3rem;
  display: block;

  ${({ styleType }) => {
    if (styleType === 'primary') {
      return css`
        background-color: ${colors.blue};
        color: ${colors.white};
      `;
    }
    if (styleType === 'success') {
      return css`
        background-color: ${colors.green};
        color: ${colors.white};
        border-color: ${colors.green};
      `;
    }
    if (styleType === 'danger') {
      return css`
        background-color: ${colors.red};
        color: ${colors.white};
        border-color: ${colors.red};
      `;
    }
    return css`
      color: ${colors.blue};
    `;
  }}

  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    cursor: default;
  `}

  :hover {
    ${({ disabled }) => !disabled && css`
      transform: scale(1.08);
    `}
  }
`;

export const BaseLinkButton = styled.a<ButtonProps>`
  padding: 0.7rem 1.5rem;
  border: 2px solid ${colors.blue};
  transition: transform 300ms;
  border-radius: 0.3rem;
  display: block;

  ${({ styleType }) => {
    if (styleType === 'primary') {
      return css`
        background-color: ${colors.blue};
        color: ${colors.white};
      `;
    }
    if (styleType === 'success') {
      return css`
        background-color: ${colors.green};
        color: ${colors.white};
        border-color: ${colors.green};
      `;
    }
    if (styleType === 'danger') {
      return css`
        background-color: ${colors.red};
        color: ${colors.white};
        border-color: ${colors.red};
      `;
    }
    return css`
      color: ${colors.blue};
    `;
  }}

  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    cursor: default;
  `}

  :hover {
    ${({ disabled }) => !disabled && css`
      transform: scale(1.08);
    `}
  }
`;

interface BaseSvgButtonProps {
  size?: 'large';
  disabled?: boolean;
}

export const BaseSvgButton = styled.button<BaseSvgButtonProps>`
  transition: transform 300ms;
  display: block;

  ${({ size }) => {
    if (size === 'large') {
      return css`
        width: 2rem;
        height: 2rem;
        border-radius: 0.3rem;
        padding: 0.3rem;

        @media (min-width: ${dimensions.mobileBreak}) {
          width: 3rem;
          height: 3rem;
          border-radius: 0.5rem;
          padding: 0.5rem;
        }
      `;
    }

    return css`
      width: 2rem;
      height: 2rem;
      border-radius: 0.3rem;
      padding: 0.3rem;
    `;
  }}

  svg {
    height: 100%;
    width: 100%;
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    cursor: default;
  `}

  :hover {
    ${({ disabled }) => !disabled && css`
      color: ${colors.blue};
    `}
  }
`;

interface BaseSvgToggleButtonProps {
  active: boolean;
}

export const BaseSvgToggleButton = styled(BaseSvgButton)<BaseSvgToggleButtonProps>`
  color: ${({ active }) => !active && colors.lightGray};
  border-radius: 0.5rem;
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
  word-break: break-word;
`;
