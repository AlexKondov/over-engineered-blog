import axios from 'axios';
import { Post } from 'types';
import { apiUrl, perPage } from '../utils';

const URL = `${apiUrl}/posts?_embed`;

export const getPosts = async (page: number = 1): Promise<Post[]> => {
  const { data } = await axios.get(URL, {
    params: { per_page: perPage, page },
  });
  return data;
};

export const getSimilarPosts = async (
  categories: number,
  exclude: number
): Promise<Post[]> => {
  const { data } = await axios.get(URL, {
    params: { per_page: 3, categories, exclude },
  });
  return data;
};

export const getPost = async (slug: string): Promise<Post> => {
  const {
    data: [post],
  } = await axios.get(URL, { params: { slug: encodeURI(slug) } });
  return post;
};

export const searchPosts = async (query: string): Promise<Post[] | []> => {
  const { data } = await axios.get(URL, {
    params: { search: encodeURI(query) },
  });
  return data;
};
