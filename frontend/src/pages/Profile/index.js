import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Case } from '../../components';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header />
      <h1>Casos Cadastrados</h1>
      <ul>
        <Case />
        <Case />
        <Case />
        <Case />
      </ul>
    </Container>
  );
}
