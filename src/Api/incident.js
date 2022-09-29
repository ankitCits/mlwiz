import { getAccessToken } from '../Storage';
import { BASE_URL } from '../Utils/constants';

export const getIncident = () => {
    return new Promise(async (resolve, reject) => {
        const token = await getAccessToken();
        var myHeaders = new Headers();
        myHeaders.append('x-access-tokens', token);
        fetch(`${BASE_URL}incident`, {
          method: 'GET',
          headers: myHeaders,
        })
        .then(result => result.json())
        .then(response => {
          console.log('Incident', response);
          if (response[0]) {
            resolve(response);
          }
          if (response.status == 400) {
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