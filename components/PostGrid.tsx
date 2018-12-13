import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { getImage, getAuthorName, getExcerpt } from '../utils/post';
import media from '../utils/media';
import { Post } from '../types';

const Grid = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 20px;

  ${media.tablet`grid-template-columns: 1fr 1fr;`};
  ${media.phone`
    width: 90%;
    grid-template-columns: 1fr;
  `};
`;

type Props = {
  posts: Post[];
};

const PostGrid = ({ posts }: Props) => (
  <Grid>
    {posts.map((post: Post) => (
      <PostCard
        key={post.slug}
        featured={false}
        title={post.title.rendered}
        slug={post.slug}
        image={getImage(post)}
        author={getAuthorName(post)}
        excerpt={getExcerpt(post)}
      />
    ))}
  </Grid>
);

export default PostGrid;
