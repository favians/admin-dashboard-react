import axios from 'axios';
import handleError from 'helpers/handleErrors/HandleError';

const httpRequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const httpRequest = (method, path, params, data) => {
  const options = {
    method,
    url: process.env.API_BASE_URL + path,
    data,
    params,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => resolve(response))
      .catch((error) => reject(handleError(error)));
  });
};

export default {
  get(path, params) {
    return httpRequest(httpRequestMethod.GET, path, params, null);
  },
  post(path, data) {
    return httpRequest(httpRequestMethod.POST, path, null, data);
  },
  put(path, data, params) {
    return httpRequest(httpRequestMethod.PUT, path, data, params);
  },
  delete(path, params) {
    return httpRequest(httpRequestMethod.DELETE, path, null, params);
  },
};
