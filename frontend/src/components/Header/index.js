import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../themes/assets/images/logo.svg';

import { colors } from '../../themes';

import { Container } from './styles';

export default function Header({ logout }) {
  const ongName = localStorage.getItem('ongName');

  return (
    <Container>
      <img src={logoImg} alt="Be The Hero" />

      <span>Bem vinda, {ongName}</span>

      <Link to="/incidents/new">Cadastrar novo caso</Link>

      <button type="button" onClick={logout}>
        <FiPower size="18" color={colors.red} />
      </button>
    </Container>
  );
}
