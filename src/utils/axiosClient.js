import axios from 'axios';

import { API_URL } from '#/config';

const EXCLUDE_REDIRECT_PATHS = ['/login'];

const axiosClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token && token !== 'undefined') {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = JSON.parse(token);
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    const {
      url,
      status,
      data: { token },
    } = response;

    if (url === `${API_URL}` && status === 200) {
      localStorage.setItem('token', JSON.stringify(token));
    }

    return response;
  },
  (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401 && !EXCLUDE_REDIRECT_PATHS.includes(window.location.pathname)) {
      window.localStorage.clear();
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export { axiosClient };
