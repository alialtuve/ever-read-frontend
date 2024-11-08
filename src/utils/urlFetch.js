import axios from 'axios';

const urlFetch = axios.create({
  baseURL:'/api/v1'
});

export default urlFetch;
