import { path } from 'ramda';
import { Post } from '../types';

const categoryPath = ['_embedded', 'wp:term', '0', '0'];

export const getExcerpt = (post: Post): string =>
  post.excerpt ? post.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '') : '';

export const getCategoryId = (post: Post) =>
  parseInt(path([...categoryPath, 'id'], post) || '', 10);

export const getAuthorName = (post: Post) =>
  (path(['_embedded', 'author', '0', 'name'], post) || '').toString();

export const getAuthorImage = (post: Post): string => {
  const url = post.author_image;
  const length = url.length;
  const imagePath = url.substring(0, length - 4);
  const imageExtension = url.substring(length - 4, length);

  return `${imagePath}-150x150${imageExtension}`;
};

export const getImage = (post: Post, size: string = 'medium') =>
  (
    path(
      [
        '_embedded',
        'wp:featuredmedia',
        '0',
        'media_details',
        'sizes',
        size,
        'source_url',
      ],
      post
    ) || ''
  ).toString();
