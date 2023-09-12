import axios from 'axios';

export function login(email, password) {
  return axios.post('http://localhost:9999/login', { email: email, password: password });
}

export function register(name, nickname, password, email) {
  return axios.post(`http://localhost:8080/auth/register`, { name: name, nickname: nickname, password: password, email: email });
  
}