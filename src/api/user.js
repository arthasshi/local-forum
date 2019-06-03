import fetch from '../utils/fetch';

const GET_ALL_USERS = '/user/';


export const getAllUsers = () => fetch({
  url: GET_ALL_USERS,
  method: 'GET',
});

export const addUser = data => fetch({
  url: 'asdasda',
  method: 'POST',
  data,
});
