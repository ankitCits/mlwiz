import { getAccessToken } from '../Storage';
import { BASE_URL } from '../Utils/constants';

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

export const userDetails = () => {
  return new Promise(async (resolve, reject) => {
    const token = await getAccessToken();

    // resolve(
    //   {
    //     "id": 3,
    //     "password_hash": "$2a$14$evsx579ihmwExQjg0DRkVe.NcAyZiEXl8lFnT/jB.f14Hd9GaTtCi",
    //     "user_id": "3b273a74-973a-47f7-adc3-48918748ad85",
    //     "username": "ankitp"
    //   }
    // );
    // return;

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
          resolve(response[0]);
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
    headers: { 'Content-Type': 'application/json' },
    body: postDataStr,
  };
  return requestOptions;
};
