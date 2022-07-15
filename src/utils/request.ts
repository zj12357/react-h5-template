import axios from 'axios';
import { isMobile } from 'licia';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const equipment = isMobile() ? 1 : 2;
const UserToken = localStorage.getItem('token') || '';

const service = axios.create({
    baseURL: '/', // url = base url + request url
    timeout: 5000,
    // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
    (config) => {
        NProgress.start();
        // Add X-Access-Token header to every request, you can add other custom headers here
        if (UserToken) {
            config.headers['X-Access-Token'] = UserToken;
        }
        // 设置公共参数
        // config.params = { device: equipment };
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

// Response interceptors
service.interceptors.response.use(
    (response) => {
        NProgress.done();
        // Some example codes here:
        // code == 20000: success
        // code == 50001: invalid access token
        // code == 50002: already login in other place
        // code == 50003: access token expired
        // code == 50004: invalid user (user not exist)
        // code == 50005: username or password is incorrect
        // You can change this part for your own usage.
        const res = response.data;
        if (res.code !== 200) {
            console.error(res.msg || '请求错误');

            // return Promise.reject(new Error(res.msg || "Error"));
        } else {
            return response.data;
        }
    },
    (error) => {
        console.error(error.msg || '请求错误');
        return Promise.reject(error);
    },
);

export default service;
