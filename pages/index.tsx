import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../components/Header';
import FeaturedGrid from '../components/FeaturedGrid';
import Subscribe from '../components/Subscribe';
import PostGrid from '../components/PostGrid';
import TrackVisibility from '../components/TrackVisibility';

import { getPosts } from '../services/postService';
import { getLatestPodcasts } from '../services/podcastService';
import { Post, Podcast } from 'types';

const LoadingMore = styled.div`
  text-align: center;
  margin: 30px 0px;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
`;

type Props = {
  posts: Post[];
  podcasts: Podcast[];
};

type State = {
  page: number;
  posts: Post[];
  morePosts: boolean;
};

class Index extends React.Component<Props, State> {
  state = {
    page: 1,
    posts: [],
    morePosts: true,
  };

  static async getInitialProps(): Promise<Props> {
    const [posts, podcasts] = await Promise.all([
      getPosts(),
      getLatestPodcasts(),
    ]);
    return { posts, podcasts };
  }

  getMorePosts = async () => {
    try {
      const posts = await getPosts(this.state.page + 1);
      this.setState({
        page: this.state.page + 1,
        posts: [...this.state.posts, ...posts],
      });
    } catch (err) {
      this.setState({ morePosts: false });
    }
  };

  render() {
    return (
      <div>
        <Head>
          <meta property="og:url" content="https://thesavagemind.com" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Начало - The Savage Mind" />
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
        <FeaturedGrid
          posts={this.props.posts.slice(0, 1)}
          podcasts={this.props.podcasts}
        />
        <Subscribe />
        <PostGrid posts={[...this.props.posts.slice(1), ...this.state.posts]} />
        <TrackVisibility onVisible={this.getMorePosts}>
          <LoadingMore>
            {this.state.morePosts ? 'Зареждаме още...' : ''}
          </LoadingMore>
        </TrackVisibility>
      </div>
    );
  }
}

export default Index;
