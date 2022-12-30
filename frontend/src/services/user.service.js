import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * get user data
 * @param {String} token
 * @returns {JSON} response
 */
export function getUser(token) {
  return axios.post(
    `${API_URL}user/profile`,
    {},
    { headers: { authorization: `Bearer ${token}` } }
  );
}

/**
 * Update the firstName and the lastName
 * @param {String} firstName
 * @param {Strinf} lastName
 * @returns {JSON} response api
 */
export function updateUser(token, firstName, lastName) {
  return axios.put(
    `${API_URL}user/profile`,
    { firstName, lastName },
    { headers: { authorization: `Bearer ${token}` } }
  );
}
