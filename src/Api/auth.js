import { BASE_URL } from "../Utils/constants";

export const singIn = (postData) => {
    return new Promise(async (resolve, reject) => {
        const data = requestOption(postData);
        console.log("Auth > sigIn > postData", postData);
        fetch(`${BASE_URL}login`, data)
            .then(result => result.json())
            .then(response => {
                console.log("Auth > sigIn > response", response);
                if (response.status == 200) {
                    resolve(response)
                }
                if (response.errors) {
                    reject(response.errors.errors)
                }
            })
            .catch(error => {
                console.log(error);
                reject(error.message)
            });
    });
};

const requestOption = (data) => {
    const postDataStr = JSON.stringify(data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: postDataStr,
    };
    return requestOptions;
}
