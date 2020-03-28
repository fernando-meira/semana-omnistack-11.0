import styled from 'styled-components';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.header`
  width: 100%;
  padding: 0 ${pxToRem(32)};
  max-width: ${pxToRem(1180)};
  margin: ${pxToRem(32)} auto;

  display: flex;
  align-items: center;

  img {
    height: ${pxToRem(64)};
  }

  span {
    margin-left: ${pxToRem(24)};

    font-size: ${pxToRem(20)};
  }

  a {
    border: 0;
    margin-left: auto;
    width: ${pxToRem(260)};
    height: ${pxToRem(60)};
    border-radius: ${pxToRem(8)};

    display: inline-block;

    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${colors.white};
    transition: filter 0.2s;
    font-size: ${pxToRem(18)};
    background: ${colors.red};
    line-height: ${pxToRem(60)};

    :hover {
      filter: brightness(90%);
    }
  }

  button {
    width: ${pxToRem(60)};
    height: ${pxToRem(60)};
    border-radius: ${pxToRem(4)};
    border: 1px solid ${colors.lightGray};
    margin-left: ${pxToRem(16)};

    background: ${colors.transparent};
    transition: border-color 0.2s;
  }

  button:hover {
    border-color: ${colors.gray};
  }
`;
