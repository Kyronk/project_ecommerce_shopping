import axios from "axios";
import {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    // logoutStart,
    // logoutSuccess,
    // logoutFailed,
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(
            "http://localhost:5012/api/user/login",
            user
        );
        dispatch(loginSuccess(res.data));
        navigate("/home");
    } catch (error) {
        dispatch(loginFailed());
    }
};