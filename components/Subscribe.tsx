import React from 'react';
import styled from 'styled-components';
import DefaultButton from './DefaultButton';
import NewsletterIcon from './icons/NewsletterIcon';
import media from '../utils/media';

const Section = styled.section`
  text-align: center;
  padding: 50px 0px;
  margin: 0px auto;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  svg {
    path {
      fill: var(--black);
    }
  }

  ${media.tablet`width: 80%;`};
  ${media.phone`width: 80%;`};
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: var(--black);
  text-align: center;
`;

const Subscribe = () => (
  <Section>
    <NewsletterIcon />
    <Text>
      Остави ни любимия си мейл, за да разбираш пръв, когато правим нещо ново.
    </Text>
    <Text>Без спам, този newsletter не е от досадните.</Text>
    <DefaultButton onClick={() => window.open('http://eepurl.com/cEVLd9')}>
      Запиши ме!
    </DefaultButton>
  </Section>
);

export default Subscribe;
