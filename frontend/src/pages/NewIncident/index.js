import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../themes/assets/images/logo.svg';
import { colors } from '../../themes';

import api from '../../services/api';

import { Container, Content, Section, Form, Button } from './styles';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

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

        <Form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
