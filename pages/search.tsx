import React from 'react';
import styled from 'styled-components';
import { searchPosts } from '../services/postService';
import Header from '../components/Header';
import PostGrid from '../components/PostGrid';
import { Post } from '../types';
import { NextContext } from 'next';

const Heading = styled.h1`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 40px 0px;
`;

type Props = {
  query: string;
  posts: Post[];
};

class Search extends React.Component<Props> {
  static async getInitialProps({ query }: NextContext) {
    const { q } = query;
    const posts = await searchPosts(q);
    return { posts, query: q };
  }

  render() {
    return (
      <div>
        <Header />
        <Heading>Резултати за {`"${this.props.query}"`}</Heading>
        <PostGrid posts={this.props.posts} />
      </div>
    );
  }
}

export default Search;
