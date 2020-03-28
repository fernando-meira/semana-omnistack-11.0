import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../themes/assets/images/logo.svg';
import heroesImg from '../../themes/assets/images/heroes.png';

import { colors } from '../../themes';

import { Container, Section, Form, Button } from './styles';

import { Input } from '../../components';

export default function Logo() {
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <h1>Faça o seu logon</h1>

          <Input />

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
