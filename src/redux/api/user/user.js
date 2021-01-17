import axios from "axios";
import { domain } from "../../../config/index";

export const login = (account) => {
    return axios({
        method: "POST",
        url: `${domain}/users/authenticate`,
        data: account,
    });
};

export const register = (account) => {
    return axios({
        method: "POST",
        url: `${domain}/users/registry`,
        data: account,
    });
};


export const registerConfirm = (value) => {
    return axios({
        method: "POST",
        url: `${domain}/users/registry/confirm`,
        data: value,
    });
};
