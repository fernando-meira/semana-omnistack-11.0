import React from 'react';
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

          <a href="/register">
            <FiLogIn size="16" color={colors.red} />
            Não tenho cadastro
          </a>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
