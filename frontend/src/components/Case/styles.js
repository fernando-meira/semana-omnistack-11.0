import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.li`
  position: relative;

  margin: ${pxToRem(24)} 0;
  padding: ${pxToRem(24)};
  min-width: ${pxToRem(500)};
  border-radius: ${pxToRem(8)};

  list-style: none;
  background: ${colors.white};

  button {
    position: absolute;
    right: ${pxToRem(24)};
    top: ${pxToRem(24)};

    border: 0;
    background: ${colors.transparent};
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.8;
  }

  strong {
    display: block;
    margin-bottom: ${pxToRem(16)};
    color: ${colors.secondGray};
  }

  p + strong {
    margin-top: ${pxToRem(32)};
  }

  p {
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(21)};
    color: ${colors.lighterGray};
  }
`;
