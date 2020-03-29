import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Header, Case } from '../../components';

import { Container } from './styles';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar, tente novamente.');
    }
  }

  return (
    <Container>
      <Header />
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <Case
            key={incident.id}
            incident={incident}
            onDelete={() => handleDeleteIncident(incident.id)}
          />
        ))}
      </ul>
    </Container>
  );
}
