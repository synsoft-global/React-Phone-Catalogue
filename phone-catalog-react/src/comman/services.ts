/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * Created on Fri March 05 2021
 * Created By virendra yadav
 * Copyright (c) 2021 synsoft global
 */
import axios from 'axios';
import { BASE_URL } from '../app-config';

/*
 * defining header for call api using axois
 */

const requestObj = axios.create({
  baseURL: `${BASE_URL}/`,
  responseType: 'json',
  headers: { 'content-Type': 'application/json' },
});

/*
 * defining function to get user data from server
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getApiCall(apiName: string, parameters: string | null) {
  return requestObj.get(`${apiName}?${parameters}`).then((res) => res.data);
}

/*
 * defining function to post user data from server
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function postApiCall(apiName: string, parameters: any) {
  return requestObj.post(`${apiName}`, parameters).then((res) => res.data);
}

/*
 * defining function to update user data from server
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function UpdateApiCall(apiName: string, parameters: any, userdata: any) {
  return requestObj.put(`${apiName}?${parameters}`, userdata).then((res) => res.data);
}

/*
 * defining function to delete  user data from server
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function DeleteApiCall(apiName: string, parameters: string) {
  return requestObj.delete(`${apiName}?${parameters}`).then((res) => res.data);
}

/*
 * defining function to parse staing value to json
 */

export function jsonParser(data: any) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
}

/*
 * this function is used for set access token of use
 */

export function SetAccessToken(userData: any) {
  localStorage.setItem('token', JSON.stringify(userData.token));
  localStorage.setItem('email', JSON.stringify(userData.user_info.email));
  localStorage.setItem('username', JSON.stringify(userData.user_info.username));
  localStorage.setItem('mobile_number', JSON.stringify(userData.user_info.mobile_number));
  localStorage.setItem('id', userData.user_info.id);
}
