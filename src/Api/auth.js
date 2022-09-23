import {getAccessToken} from '../Storage';
import {BASE_URL} from '../Utils/constants';

export const singIn = postData => {
  return new Promise(async (resolve, reject) => {
    const data = requestOption(postData);
    console.log('Auth > sigIn > postData', postData);
    fetch(`${BASE_URL}login`, data)
      .then(result => result.json())
      .then(response => {
        console.log('Auth > sigIn > response', response);
        if (response.token) {
          resolve(response);
        }
        if (response.errors) {
          reject(response.errors.errors);
        }
      })
      .catch(error => {
        console.log(error);
        reject(error.message);
      });
  });
};

export const userDetails = postData => {
  return new Promise(async (resolve, reject) => {
    const token = await getAccessToken();
    // const data = requestOption(postData);
    // console.log("Auth > sigIn > postData", postData);
    var myHeaders = new Headers();
    myHeaders.append('x-access-tokens', token);
    fetch(`${BASE_URL}auth_user`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(result => result.json())
      .then(response => {
        console.log('USER_DEATIL > response', response);
        if (response) {
          resolve(response);
        }
        if (response.errors) {
          reject(response.errors.errors);
        }
      })
      .catch(error => {
        console.log(error);
        reject(error.message);
      });
  });
};

const requestOption = data => {
  const postDataStr = JSON.stringify(data);
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: postDataStr,
  };
  return requestOptions;
};
