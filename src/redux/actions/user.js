import { login, register, registerConfirm } from "../api/user";
import { createAction } from "./createAction";
import { LOGIN, REGISTER, REGISTRY_CONFIRM } from "../contants";
import { accessToken } from "../../config";

export const actionLoginRequest = (account) => {
    return (dispatch) => {
        return login(account)
            .then((res) => {
                dispatch(createAction(LOGIN, res.data));
                localStorage.setItem(accessToken, res.data.token);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const actionRegistryConfirmRequest = (value) => {
    return (dispatch) => {
        return registerConfirm(value)
            .then((res) => {
                dispatch(createAction(REGISTRY_CONFIRM, res.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const actionRegisterRequest = (account) => {
    return (dispatch) => {
        return register(account)
            .then((res) => {
                dispatch(createAction(REGISTER, res.data));
                localStorage.setItem(accessToken, res.data.token);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
