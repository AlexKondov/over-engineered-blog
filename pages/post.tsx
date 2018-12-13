import React from 'react';
import styled from 'styled-components';
import { withRouter, SingletonRouter } from 'next/router';
import { format } from 'date-fns';
import bg from 'date-fns/locale/bg';

// Utilities
import { isDeviceMobile } from '../utils';
import {
  getImage,
  getAuthorName,
  getCategoryId,
  getAuthorImage,
} from '../utils/post';
import media from '../utils/media';
import { getPost, getSimilarPosts } from '../services/postService';
import { Post } from '../types';

// Components
import Header from '../components/Header';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import Subscribe from '../components/Subscribe';
import PostGrid from '../components/PostGrid';
import ReadingTime from '../components/ReadingTime';
import PostHead from '../components/PostHead';
import ReadingProgress from '../components/ReadingProgress';
import { NextContext } from 'next';

const SubscribeForm = styled.section`
  background-color: var(--orange);
  margin: 30px 0px;
  p {
    color: #fff;
  }
  svg {
    path {
      fill: #fff;
    }
  }
`;

const SimilarPosts = styled.section`
  margin-bottom: 30px;
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: bold;
    margin-top: 40px;
    text-align: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    ${media.phone`font-size: 30px;`};
  }
  p {
    font-family: 'Merriweather', serif;
    text-align: center;
  }
`;

type Props = {
  router: SingletonRouter;
  post: Post;
  similarPosts: Post[];
  device: string;
};

class Index extends React.Component<Props> {
  static async getInitialProps({ query, req }: NextContext) {
    const device = req ? req.headers['user-agent'] : navigator.userAgent;

    const { slug } = query;
    const post = await getPost(typeof slug === 'string' ? slug : '');
    const categoryId = getCategoryId(post);
    const similarPosts = await getSimilarPosts(categoryId, post.id);

    return { post, device, similarPosts };
  }

  render() {
    const { post, device } = this.props;
    const imageSize = isDeviceMobile(device) ? 'medium_large' : 'full';
    return (
      <div>
        <PostHead post={post} />
        <Header />
        <ReadingProgress />
        <article>
          <PostHeader
            title={post.title.rendered}
            image={getImage(post, imageSize)}
            authorName={getAuthorName(post)}
            authorImage={getAuthorImage(post)}
            postDate={format(new Date(post.date), 'D MMMM', { locale: bg })}
          />
          <ReadingTime content={post.content.rendered} />
          <PostContent content={post.content.rendered} />
          <SubscribeForm>
            <Subscribe />
          </SubscribeForm>
          <SimilarPosts>
            <h3>Ако този пост ти е харесал...</h3>
            <p>Ето още няколко на същата тематика.</p>
          </SimilarPosts>
          <PostGrid posts={this.props.similarPosts} />
        </article>
      </div>
    );
  }
}

export default withRouter(Index);
