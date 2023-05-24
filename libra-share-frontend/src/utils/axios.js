import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'localhost:8080/api/v1/librashare/users/register',
});

export default customFetch;
