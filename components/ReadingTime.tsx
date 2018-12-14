import React from 'react';
import styled from 'styled-components';
import media from '../utils/media';

const Text = styled.div`
  margin: 10px auto 0px auto;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  color: #f47555;
  text-align: left;
  width: 45%;

  span {
    margin-right: 5px;
  }

  ${media.phone`width: 90%;`};
`;

type Props = {
  content: string;
};

const getCoffeeCups = (minutes: number): string => {
  return '☕'.repeat(Math.ceil(minutes / 4));
};

const ReadingTime = ({ content }: Props) => {
  // According to a Google search this is the average
  // amount of worts that a person reads for a minute
  const wordsPerMinute = 180;
  const averageReadingTime = Math.max(
    1,
    Math.floor(content.split(' ').length / wordsPerMinute)
  );
  const minutesString = `минут${averageReadingTime === 1 ? 'а' : 'и'}`;

  return (
    <Text>
      <span>{getCoffeeCups(averageReadingTime)}</span>
      Чете се за {averageReadingTime} {minutesString}{' '}
    </Text>
  );
};

export default ReadingTime;
