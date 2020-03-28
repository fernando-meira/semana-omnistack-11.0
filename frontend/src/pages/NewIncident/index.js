import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../themes/assets/images/logo.svg';
import { colors } from '../../themes';

import { Container, Content, Section, Form, Button } from './styles';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={LogoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size="16" color={colors.red} />
            Voltar para Home
          </Link>
        </Section>

        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
