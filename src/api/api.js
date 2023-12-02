import axios from 'axios';

export default axios.create({
  baseURL: 'https://backendmaisjogos-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  },
});