import React from 'react';

import { AlertTitleContainer } from '../pages/LandingPage/styled';

export const buyConfig = (name, cost) => ({
  title: <AlertTitleContainer>
    <span>Gostaria de comprar {name}?</span>
    <span>Irá custar {cost} Ethereum</span>
  </AlertTitleContainer>,
  input: 'range',
  inputLabel: 'Quantos porcento irá doar?',
  inputAttributes: {
    min: 10,
    max: 100,
    step: 1
  },
  inputValue: 10,
  showCancelButton: true,
  confirmButtonText: 'Comprar',
  cancelButtonText: 'Cancelar'
})