import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "eea6cf8e79673e103a0a449bc11cf5ef"

const ApiManager = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
    withCredentials: true,
    delayed: true,
    params: {
        api_key: API_KEY
    }
});

ApiManager.interceptors.request.use((config) => {
    if (config.delayed) {
        return new Promise((resolve) => setTimeout(() => resolve(config), 100));
    }
    return config;
});

export default ApiManager;