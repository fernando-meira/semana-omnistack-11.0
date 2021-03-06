import styled from 'styled-components';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: ${pxToRem(1120)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: ${pxToRem(350)};
  margin-right: ${pxToRem(30)};
`;

export const Form = styled.form`
  margin-top: ${pxToRem(100)};

  h1 {
    margin-bottom: ${pxToRem(32)};

    font-size: ${pxToRem(32)};
  }

  input {
    width: 100%;
    height: ${pxToRem(60)};
    padding: 0 ${pxToRem(24)};
    border-radius: ${pxToRem(8)};
    border: ${pxToRem(1)} solid ${colors.lightGray};

    color: ${colors.gray};
  }

  svg {
    margin-right: ${pxToRem(8)};
  }

  a {
    margin-top: ${pxToRem(40)};

    display: flex;
    align-items: center;

    color: ${colors.mediumGray};
    font-size: ${pxToRem(18)};

    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: ${pxToRem(60)};
  margin-top: ${pxToRem(16)};
  border: 0;
  border-radius: ${pxToRem(8)};

  display: inline-block;

  background: ${colors.red};

  color: ${colors.white};
  font-size: ${pxToRem(18)};
  font-weight: bold;
  line-height: ${pxToRem(60)};
  text-align: center;
  text-decoration: none;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;
