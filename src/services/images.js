import { createWrapper } from './http';

const API_URL = 'https://unsplash.it';

const api = createWrapper({
  baseURL: API_URL
});

/**
 * Get images list
 * @param {number} [offset=0] Pagination offset
 * @param {number} [limit] Pagination limit
 */
export const getImages = async (offset = 0, limit) => {
  const data = await api('/list');
  return Response.data.slice(offset, limit);
};
