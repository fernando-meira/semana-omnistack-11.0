import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { colors } from '../../themes';

import { Container } from './styles';

export default function Case() {
  return (
    <Container>
      <strong>Caso:</strong>
      <p>Caso Teste</p>

      <strong>Descrição:</strong>
      <p>Descrição Teste</p>

      <strong>Valor:</strong>
      <p>120</p>

      <button type="button">
        <FiTrash2 size={20} color={colors.mediumGray} />
      </button>
    </Container>
  );
}
