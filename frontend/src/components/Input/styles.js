import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.input.attrs({
  type: 'text',
  placeholder: 'Sua ID',
})`
  width: 100%;
  height: ${pxToRem(60)};
  padding: 0 ${pxToRem(24)};
  border-radius: ${pxToRem(8)};
  border: ${pxToRem(1)} solid ${colors.lightGray};

  color: ${colors.gray};
`;
