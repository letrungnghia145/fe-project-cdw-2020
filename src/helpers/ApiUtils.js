import axios from "axios";
const parentPath = "http://localhost:8080";

export const callAPI = (endpoint, method, data) => {
    return axios({
        data,
        method,
        url: `${parentPath}/${endpoint}`,
    });
};
