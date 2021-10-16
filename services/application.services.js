import axios from 'axios';

const API_URL = 'https://shopadvisr.herokuapp.com/';
const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const textSearch = searchTerm => {};

export const micSearch = async data => {
  /*
  const res = await axiosInstance.post('suggestions', {
    data,
    headers: { 'Content-Type': 'application/octet-stream' },
  });
  */
  const res = await axios.post(API_URL + 'suggestions', data, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  return res;
};
