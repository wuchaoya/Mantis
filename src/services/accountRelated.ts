/* 账号相关 */

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

/**
 * 账号密码登录
 * @param params
 * @returns {Promise<TResult|TResult2|TResult1>}
 */
export async function login (params) {
  return request(`/uc/login`,{
    method: 'POST',
    body: params
  })
}