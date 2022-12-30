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
