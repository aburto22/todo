import { createGlobalStyle } from 'styled-components';
import { dimensions } from './cssVariables';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: inherit
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
`;

export default GlobalStyle;
