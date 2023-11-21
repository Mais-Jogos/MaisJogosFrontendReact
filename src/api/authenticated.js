import React from 'react'
import api from './api';

const authenticated = (navigate) => {
    const token = localStorage.getItem('token');
  
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    } else {
      navigate('/entrar');
    }
  };

export default authenticated