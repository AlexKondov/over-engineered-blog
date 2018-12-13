import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { ContentType } from '../types';

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

type Props = {
  title: string;
  url: string;
  type: ContentType;
};

type StyledProps = {
  type: ContentType;
};

const Card = styled.div`
	position: relative;
	display: grid;
	align-items: start;
	grid-template-rows: 1fr;
	border-radius: 5px;
	box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
		0 5px 15px rgba(0, 0, 0, 0.06);
	background-color: ${(props: StyledProps) =>
    props.type === ContentType.Post ? '#fff' : '#f47555'};
	animation: 1s ease-out 0s 1 ${appearFromBottom};
	padding: 20px 20px 5px 20px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		box-shadow: 0 18px 35px 0 rgba(42, 51, 83, 0.12),
			0 8px 15px rgba(0, 0, 0, 0.06);
		transform: translate(0px, -3px);
	}
	&:after {
		content: '';
    background: url('../static/img/${(props: StyledProps) =>
      props.type === ContentType.Post ? 'documents' : 'microphone'}.svg');
		background-repeat: no-repeat;
		opacity: 0.2;
		top: 20px;
		left: 75%;
		bottom: 60%;
		right: 0;
		position: absolute;
	}
`;

const Title = styled.h3`
  &:first-child {
    margin-top: 20px;
  }
  z-index: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4em;
  color: ${(props: StyledProps) =>
    props.type === ContentType.Post ? '#272727' : '#fff'};
  margin-top: 0;
`;

const FeaturedCard = ({ url, title, type }: Props) => (
  <Link as={url} href={url}>
    <Card type={type}>
      <Title type={type}>
        {type === ContentType.Post ? 'От Блога' : 'Подкаст'}
      </Title>
      <Title type={type} dangerouslySetInnerHTML={{ __html: title }} />
    </Card>
  </Link>
);

export default FeaturedCard;
