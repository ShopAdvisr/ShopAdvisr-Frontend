import axios from 'axios';

const API_URL = 'https://shopadvisr.herokuapp.com/';
const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const textSearch = searchTerm => {};

export const micSearch = async data => {
  const res = await axiosInstance('suggestions', {
    data: data,
    headers: { 'Content-Type': 'application/octet-stream' },
  });

  return res;
};
