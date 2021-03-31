import { request } from './helpers';

const wait = (delay) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  })
} 

export const getUsers = async () => {
  // await wait(100);

  return request('users');
  // return [];
}

export const getUser = (userId) => {
  return request(`users/${userId}`);
}

export const getUserTodos = (userId) => {
  return request(`users/${userId}/todos`)
}