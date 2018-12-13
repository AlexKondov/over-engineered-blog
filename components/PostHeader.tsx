/* eslint react/no-danger: 0 */
import React from 'react';
import styled from 'styled-components';
import media from '../utils/media';

type WrapperProps = {
  background: string;
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 50px;
  background-image: url(${(props: WrapperProps) => props.background});
  background-size: cover;
  background-color: var(--orange);
  background-position: center;
  position: relative;

  ${media.phone`height: 300px;`};
`;

const Title = styled.div`
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0px 120px 20px 120px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0)
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) repeat
    scroll 0 0;

  h1 {
    font-size: 2.5em;
  }

  ${media.phone`
		padding: 0px 0px 20px 20px;
		h1 {
			font-size: 1.6em;
		}
	`};
`;

const Author = styled.div`
  clear: both;
  display: flex;
  align-items: center;
  div {
    font-size: 1.3em;
    ${media.phone`
      font-size: 1em;
    `};
  }
  div:first-of-type {
    margin-right: 20px;
  }
`;

const AuthorImage = styled.img`
  border: 3px solid #fff;
  background-position: center;
  background-size: cover;
  background-color: #ffffff;
  vertical-align: baseline;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 20px;
  float: left;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-width: 1px;
  }
`;

type Props = {
  title: string;
  image: string;
  authorName: string;
  authorImage: string;
  postDate: string;
};

const PostHeader = ({
  title,
  image,
  authorName,
  authorImage,
  postDate,
}: Props) => (
  <Wrapper background={image}>
    <Title>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <Author>
        <AuthorImage src={authorImage} />
        <div>{authorName}</div>
        <div>{postDate}</div>
      </Author>
    </Title>
  </Wrapper>
);

export default PostHeader;
