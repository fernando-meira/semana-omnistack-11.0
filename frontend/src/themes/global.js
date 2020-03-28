import { createGlobalStyle } from 'styled-components';

import { colors } from '.';
import { pxToRem } from '../functions';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${colors.secondWhite};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: ${colors.gray};
    font: 400 ${pxToRem(14)} Roboto, sans-serif, Helvetica;
  }

  input, button, textarea {
    font: 400 ${pxToRem(14)} Roboto, sans-serif, Helvetica;
  }

  button {
    cursor: pointer;
  }
`;
