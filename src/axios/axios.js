import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.REACT_APP_PROXY_URL,
    withCredentials: true
});

export const logReqError = (err) => {
	console.log("%cError: ", 
		'color: red; font-weight: bold',
		// 'color: initial; font-weight: normal',
	err.response || err);
};

export default axios;