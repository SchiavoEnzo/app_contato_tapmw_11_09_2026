import axios from 'axios'; 

 

const api = axios.create({ 

  baseURL: 'http://SEU_BACKEND:3000', // AJUSTE AQUI 

}); 

 

export const setAuthToken = (token) => { 

  if (token) { 

    api.defaults.headers.common.Authorization = `Bearer ${token}`; 

  } else { 

    delete api.defaults.headers.common.Authorization; 

  } 

}; 