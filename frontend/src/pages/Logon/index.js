import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../themes/assets/images/logo.svg';
import heroesImg from '../../themes/assets/images/heroes.png';

import { colors } from '../../themes';

import { Container, Section, Form, Button } from './styles';

export default function Logo() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça o seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size="16" color={colors.red} />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
