import styled from 'styled-components';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  width: 100%;
  padding: 0 ${pxToRem(32)};
  max-width: ${pxToRem(1180)};
  margin: ${pxToRem(32)} auto;

  h1 {
    margin-top: ${pxToRem(80)};
    margin-bottom: ${pxToRem(24)};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
  }
`;
