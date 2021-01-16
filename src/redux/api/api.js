import axios from "axios";

export const callApi = (endpoint, method, body) => {
    return axios({
        url: `http://localhost:8080/${endpoint}`,
        method,
        data: body,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
