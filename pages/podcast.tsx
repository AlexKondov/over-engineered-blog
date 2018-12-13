import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import PodcastIntro from '../components/PodcastIntro';
import { getPodcasts } from '../services/podcastService';
import media from '../utils/media';
import { Podcast } from 'types';

const Wrapper = styled.div`
  width: 50%;
  margin: 0px auto;
  padding-top: 10px;

  ${media.tablet`width: 80%;`} ${media.phone`width: 90%;`};
`;

type Props = {
  podcasts: Podcast[];
};

class Podcasts extends React.Component<Props> {
  static async getInitialProps() {
    const podcasts = await getPodcasts();
    return { podcasts };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Подкаст - The Savage Mind</title>

          <meta property="og:url" content="https://thesavagemind.com/podcast" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Подкаст - The Savage Mind" />
          <meta
            property="og:description"
            content="Това е нещо като радио предаване, в което си говорим за кариери, развитие и правим разбивка на различни компании."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/papaio-live/image/upload/v1539025359/podcast.jpg"
          />
        </Head>
        <Header />
        <Wrapper>
          <PodcastIntro />
          {this.props.podcasts.map(podcast => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title.rendered}
              content={podcast.content.rendered}
              season={podcast.meta.season[0]}
              episode={podcast.meta.episode[0]}
              link={podcast.meta.link[0]}
              resources={podcast.meta.resource}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Podcasts;
