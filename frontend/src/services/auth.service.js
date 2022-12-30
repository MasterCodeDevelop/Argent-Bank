import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * Makes a post API request to registerMakes a post API request to register
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} email
 * @param {String} password
 * @returns {JSON} responsee API
 */
export function register(firstName, lastName, email, password) {
  return axios.post(API_URL + 'user/signup', {
    firstName,
    lastName,
    email,
    password,
  });
}

/**
 * Calls a post API request to connect
 * @param {String} email
 * @param {String} password
 * @returns {JSON} responsee API
 */
export function login(email, password) {
  return axios
    .post(API_URL + 'user/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
}
/**
 * Logout remove localStorege token
 */
export function logout() {
  localStorage.removeItem('token');
}
