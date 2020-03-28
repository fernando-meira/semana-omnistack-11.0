import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: ${pxToRem(1120)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  padding: ${pxToRem(96)};
  border-radius: ${pxToRem(8)};
  background: ${colors.secondWhite};
  box-shadow: 0 0 ${pxToRem(100)} rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: ${pxToRem(380)};

  h1 {
    margin: 64px 0 32px;
    font-size: ${pxToRem(32)};
  }

  p {
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(32)};
    color: ${colors.lightPurple};
  }

  svg {
    margin-right: ${pxToRem(8)};
  }

  a {
    display: flex;
    align-items: center;
    margin-top: ${pxToRem(40)};

    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s;
    font-size: ${pxToRem(18)};
    color: ${colors.lighterGray};
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${pxToRem(450)};

  input {
    width: 100%;
    height: ${pxToRem(60)};
    padding: 0 ${pxToRem(24)};
    margin-top: ${pxToRem(8)};
    border-radius: ${pxToRem(8)};
    border: ${pxToRem(1)} solid ${colors.lightGray};

    color: ${colors.gray};
  }

  textarea {
    width: 100%;
    height: ${pxToRem(60)};
    margin-top: ${pxToRem(8)};
    min-height: ${pxToRem(140)};
    max-height: ${pxToRem(300)};
    border-radius: ${pxToRem(8)};
    padding: ${pxToRem(16)} ${pxToRem(24)};
    border: ${pxToRem(1)} solid ${colors.lightGray};

    resize: vertical;
    color: ${colors.gray};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: ${pxToRem(60)};
  border: 0;
  border-radius: ${pxToRem(8)};

  display: inline-block;

  color: ${colors.white};
  background: ${colors.red};
  font-weight: bold;
  margin-top: ${pxToRem(16)};
  text-align: center;
  text-decoration: none;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(60)};
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;
