import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { colors } from '../../themes';

import { Container } from './styles';

export default function Case({ incident, onDelete }) {
  return (
    <Container>
      <strong>Caso:</strong>
      <p>{incident.title}</p>

      <strong>Descrição:</strong>
      <p>{incident.description}</p>

      <strong>Valor:</strong>
      <p>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      </p>

      <button type="button" onClick={onDelete}>
        <FiTrash2 size={20} color={colors.mediumGray} />
      </button>
    </Container>
  );
}
