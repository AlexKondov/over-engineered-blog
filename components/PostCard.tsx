import React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';
import he from 'he';
import media from '../utils/media';

const appearFromBottom = keyframes`
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

type FeaturedProps = {
  featured: boolean;
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  transition: 0.3s;
  height: ${(props: FeaturedProps) => (props.featured ? '490px' : '380px')};
  position: relative;
  background-color: #fff;
  animation: 1s ease-out 0s 1 ${appearFromBottom};
  &:hover {
    box-shadow: 0 18px 35px 0 rgba(42, 51, 83, 0.12),
      0 8px 15px rgba(0, 0, 0, 0.06);
    transform: translate(0px, -3px);
    cursor: pointer;
    h3 {
      color: var(--orange);
    }
  }
  img {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    width: 100%;
    height: ${(props: FeaturedProps) => (props.featured ? '300px' : '200px')};
    object-fit: cover;
  }

  ${media.tablet`
		height: 350px;
		img {
			height: 150px;
		}
	`};

  ${media.phone`
		height: 350px;
		img {
			height: 150px;
		}
	`};
`;

const Content = styled.div`
  padding: 10px 20px;
`;

const Title = styled.h3`
  font-size: ${(props: FeaturedProps) => (props.featured ? '24px' : '16px')};
  font-family: 'Montserrat', sans-serif;
  color: var(--black);
  transition: 0.2s;
  margin: ${(props: FeaturedProps) => (props.featured ? '0 0 20px 0' : 0)};
  height: 50px;
  width: 100%;
  text-overflow: ellipsis;

  ${media.tablet`font-size: 16px;`};
  ${media.phone`font-size: 16px;`};
`;

const Excerpt = styled.div`
  margin: 10px 0px;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  position: relative;
  height: 3.6em; /* exactly three lines */
  ${media.phone`height: 3.7em;`}
  &:after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
  p {
    margin: 0;
  }
`;

const Author = styled.div`
  font-family: 'Merriweather', serif;
  font-size: ${(props: FeaturedProps) => (props.featured ? '18px' : '14px')};

  ${media.tablet`font-size: 14px;`};
  ${media.phone`font-size: 14px;`};
`;

type Props = {
  title: string;
  slug: string;
  image: string;
  author: string;
  featured: boolean;
  excerpt: string;
};

const PostCard = ({ title, slug, image, author, featured, excerpt }: Props) => (
  <Link prefetch={featured} as={`/post/${slug}`} href={`/post?slug=${slug}`}>
    <Wrapper featured={featured}>
      <LazyLoad height={200}>
        <img src={image} alt={title} />
      </LazyLoad>
      <Content>
        <Title featured={featured}>{he.decode(title)}</Title>
        <Excerpt>
          <p>{he.decode(excerpt)}</p>
        </Excerpt>
        <Author featured={featured}>{author}</Author>
      </Content>
    </Wrapper>
  </Link>
);

export default PostCard;
