import React from 'react';
import styled from 'styled-components';
import TrackScroll from './TrackScroll';

const Bar = styled.div`
  height: 3px;
  background-color: #f47555;
  width: 0%;
  position: fixed;
  top: 0;
  z-index: 999999999999;
  transition: 0.2s;
`;

const ReadingProgress = () => (
  <TrackScroll>
    {progress => <Bar style={{ width: `${progress * 100 * 1.2}%` }} />}
  </TrackScroll>
);

export default ReadingProgress;
