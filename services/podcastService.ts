import axios from 'axios';
import { apiUrl, perPage } from '../utils';

const URL = `${apiUrl}/podcast`;

export const getPodcasts = async (page: number = 1) => {
  const { data } = await axios.get(URL, {
    params: { per_page: perPage, page },
  });
  return data;
};

export const getLatestPodcasts = async () => {
  const { data } = await axios.get(URL, { params: { per_page: 2 } });
  return data;
};
