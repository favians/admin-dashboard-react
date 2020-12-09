import axios from 'axios';

export const GetListUser = async (username,password) => {
  console.log(username)
  console.log(password)
  const options = {
    method: 'get',
    url: process.env.API_BASE_URL + '/api/users?page=2',
    headers: {
      'Authorization': 'Bearer ' + 'token',
      'Content-Type': 'application/json'
    },
  }
  return axios(options)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log(error)
  });
};
