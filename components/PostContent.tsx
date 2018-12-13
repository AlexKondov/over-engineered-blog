import React from 'react';
import styled from 'styled-components';
import media from '../utils/media';

const Content = styled.div`
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Merriweather', serif;
  text-align: center;

  ${media.tablet`width: 80%;`} ${media.phone`width: 90%;`}

  h1, h2, h3 {
    text-align: left;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.125rem;
    text-align: left;
    line-height: 33px;
    &:first-of-type {
      &::first-line {
        font-weight: bold;
      }
      &:first-letter {
        font-weight: bold;
        font-size: 4rem;
        float: left;
        margin-top: 20px;
        margin-right: 5px;
      }
    }
    a {
      color: #000000;
      text-decoration: none;
      -moz-box-shadow: inset 0 -4px 0 var(--orange);
      -webkit-box-shadow: inset 0 -4px 0 var(--orange);
      box-shadow: inset 0 -4px 0 var(--orange);
      transition: 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
      &:hover {
        background-color: var(--orange);
      }
    }
  }

  img {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: inherit;
    object-fit: cover;
  }

  > blockquote {
    font-size: 1.4em;
    width: 60%;
    margin: 50px auto;
    font-style: italic;
    color: #555555;
    padding: 1.2em 30px 1.2em 30px;
    border-left: 8px solid var(--orange);
    line-height: 1.6;
    position: relative;
    background: #ededed;
    text-align: left;
    ${media.phone`
      font-size: 1em;
      width: 90%;
      padding: 0.5em 15px;
    `};
  }
`;

type Props = {
  content: string;
};

class PostContent extends React.Component<Props> {
  componentDidMount() {
    const imageNodes = document.querySelectorAll<HTMLImageElement>(
      'article img'
    );
    const images = [].slice.call(imageNodes);

    // TODO: first get the images and then fill lthem in
    images
      .map((image: HTMLImageElement) => image.src)
      .forEach((imageSource: string, index: number) => {
        const currentImage = imageNodes[index];
        currentImage.src = imageSource.replace(
          'http://thesavagemind.com',
          'https://api.thesavagemind.com'
        );
      });
  }

  render() {
    const { content } = this.props;
    return (
      <Content
        dangerouslySetInnerHTML={{
          __html: content.replace(/<\/?span[^>]*>/g, ''),
        }}
      />
    );
  }
}

export default PostContent;
