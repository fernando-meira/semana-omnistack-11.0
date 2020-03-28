import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { colors } from '../../themes';

import logoImg from '../../themes/assets/images/logo.svg';
import { Container, Content, Section, Form, Button } from './styles';

export default function Register() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size="16" color={colors.red} />
            Não tenho cadastro
          </Link>
        </Section>

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="inputGroup">
            <input placeholder="cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
