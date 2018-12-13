import React from 'react';
import Head from 'next/head';
import { getImage, getExcerpt } from '../utils/post';
import { Post } from 'types';
import he from 'he';

type Props = {
  post: Post;
};

const PostHead = ({ post }: Props) => (
  <Head>
    <title
      dangerouslySetInnerHTML={{
        __html: `${post.title.rendered} - The Savage Mind`,
      }}
    />
    <meta
      property="og:url"
      content={`https://thesavagemind.com/post/${post.slug}`}
    />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={he.decode(post.title.rendered)} />
    <meta property="og:description" content={getExcerpt(post)} />
    <meta property="og:image" content={getImage(post, 'medium_large')} />
  </Head>
);

export default PostHead;
