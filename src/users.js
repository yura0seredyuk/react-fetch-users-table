import { request } from './helpers';

export const getUsers = () => {
  return request('users');
}