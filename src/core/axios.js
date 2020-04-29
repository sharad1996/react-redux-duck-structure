import axios from 'axios';
import config from "./config";

axios.defaults.baseURL = config.baseURL;

export const setupAxiosInterceptors = () => {
    const onRequestSuccess = request => {
        const token = localStorage.getItem('access_token');
        const email = localStorage.getItem('access_email');
        if (token) {
            request.headers = {
                "X-Auth-Key": email,
                "X-Auth-Secret": token,
            };
        }
        return request;
    };

    // const onResponseSuccess = response => response;

    // const onResponseError = err => {
    //     const status = err.status || (err.response ? err.response.status : 0);
    //     if (status === 403 || status === 401) {
    //         console.log("unautheticated");
    //     }
    //     return Promise.reject(err);
    // };

    axios.interceptors.request.use(onRequestSuccess);
    // axios.interceptors.response.use(onResponseSuccess, onResponseError);
};
