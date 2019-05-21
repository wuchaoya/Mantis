import request from '@/utils/request';
import axios from 'axios';



import { stringify } from 'qs';

export async function initialize (params) {
  axios.get('/api/initialize/get', {
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export async function login (params) {
  return request(`/login/native`,{
    method: 'POST',
    body: params
  })
}