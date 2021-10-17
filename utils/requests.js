import axios from 'axios';

const API_URL = 'https://shopadvisr.herokuapp.com/';
const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const micSearch = async data => {
  const res = await axios.post(API_URL + 'suggestions', data, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  return res.data;
};

export const textSearch = async data => {
  /*
  const res = await axios.post(API_URL + 'search', data, {
    headers: {
      'Content-Type': 'application/html',
    },
  });
  */

  const res = await axios.post('https://shopadvisr.herokuapp.com/search', {
    text: data,
  });

  return res.data;
};

export const imageSearch = async data => {
  const res = await axios.post(API_URL + 'ocr', data, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  return res;
};
