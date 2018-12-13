import React from 'react';
import styled from 'styled-components';
import MicrophoneIcon from './icons/MicrophoneIcon';

const Background = styled.div`
  height: calc(100% - 70px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  margin: 20px 0px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: start;
    padding-top: 50px;
  }
  svg {
    path {
      fill: var(--black);
    }
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: var(--black);
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0px 20px;
  }
`;

const ComingSoon = () => (
  <Background>
    <MicrophoneIcon />
    <Text>Подкаста е нещо като радио предаване.</Text>
    <Text>
      В нашия си говорим за кариери, развитие, тренировки и как да съберем първи
      рунд финансиране от сватба.
    </Text>
  </Background>
);

export default ComingSoon;
