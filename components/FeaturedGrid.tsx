import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';
import PostCard from './PostCard';
import { getImage, getAuthorName, getExcerpt } from '../utils/post';
import media from '../utils/media';
import { Post, Podcast, ContentType } from '../types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
  width: 70%;
  margin: 24px auto 0px auto;

  ${media.tablet`grid-template-columns: 1fr 1fr;`};
  ${media.phone`grid-template-columns: 1fr; width: 90%;`};
`;

const InnerGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;
`;

type Props = {
  posts: Post[];
  podcasts: Podcast[];
};

const FeaturedGrid = ({ posts, podcasts }: Props) => {
  if (!posts.length) return null;
  const [latest] = posts;

  return (
    <Grid>
      <div>
        <PostCard
          featured
          key={latest.slug}
          title={latest.title.rendered}
          slug={latest.slug}
          image={getImage(latest, 'full')}
          author={getAuthorName(latest)}
          excerpt={getExcerpt(latest)}
        />
      </div>
      <InnerGrid>
        <FeaturedCard
          type={ContentType.Podcast}
          url="/podcast"
          title={podcasts[0].title.rendered}
        />
        <FeaturedCard
          type={ContentType.Podcast}
          url="/podcast"
          title={podcasts[1].title.rendered}
        />
      </InnerGrid>
    </Grid>
  );
};

export default FeaturedGrid;
