/* eslint react/no-danger: 0 */
import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  h2 {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  span {
    font-size: small;
    font-weight: bold;
    color: var(--orange);
  }
`;

const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      margin-bottom: 5px;
      span::before {
        content: ' - ';
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
  }
`;

const Separator = styled.h5`
  margin: 15px 0px;
  border-bottom: 1px solid lightgrey;
  font-weight: bold;
`;

type Props = {
  title: string;
  content: string;
  season: number;
  episode: number;
  link: string;
  resources: string[];
};

const PodcastCard = ({
  title,
  content,
  season,
  episode,
  link,
  resources,
}: Props) => (
  <Wrapper>
    <Title>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />{' '}
      <span>
        Сезон {season} Епизод {episode}
      </span>
    </Title>
    <LazyLoad height={166}>
      <iframe
        title="podcast"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={link}
      />
    </LazyLoad>
    <Description>
      <div dangerouslySetInnerHTML={{ __html: content }} />{' '}
      {resources ? (
        <>
          <Separator>Ресурси</Separator>
          <ul>
            {resources &&
              resources.map(resource => {
                const [name, url, description] = resource.split(';');
                return (
                  <li key={name}>
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                      {name}
                    </a>
                    <span>{description}</span>
                  </li>
                );
              })}
          </ul>
        </>
      ) : null}
    </Description>
  </Wrapper>
);

export default PodcastCard;
