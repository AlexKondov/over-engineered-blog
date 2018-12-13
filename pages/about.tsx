import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../components/Header';

const Wrapper = styled.section`
  background: #f47555;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: start;
  }
`;

const Heading = styled.h1`
  font-size: 4em;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  text-align: left;
  width: 70%;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2em;
    width: 80%;
  }
`;

const Text = styled.p`
  color: #fff;
  font-size: 2em;
  width: 70%;
  font-family: 'Montserrat', sans-serif;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 80%;
    font-size: 1.5em;
  }
`;

const SocialLinks = styled.ul`
  padding: 0;
  list-style-type: none;
  color: #fff;
  width: 70%;
  display: flex;
  flex-direction: column;
  font-size: 2em;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    width: 80%;
    font-size: 1.5em;
  }
  li {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      margin-bottom: 7px;
    }
    a {
      color: #fff;
      margin-left: 5px;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const Podcast = () => (
  <div>
    <Head>
      <title>Ние - The Savage Mind</title>

      <meta property="og:url" content="https://thesavagemind.com" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Ние - The Savage Mind" />
      <meta
        property="og:description"
        content="Блогът за диви умове, които имат какво да кажат"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/papaio-live/image/upload/v1539025797/milennials.jpg"
      />
    </Head>
    <Header />
    <Wrapper>
      <Heading>
        Блогът за диви умове,
        <br />
        които имат какво да кажат.
      </Heading>
      <Text>
        Пишем и говорим за нещата, които ни вълнуват, правят ни по-добри и ни
        забавляват.
      </Text>
      <SocialLinks>
        <li>
          <a
            href="https://instagram.com/thesavagemind"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thesavagemind
          </a>
        </li>
      </SocialLinks>
    </Wrapper>
  </div>
);

export default Podcast;
