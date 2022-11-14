import axios from 'axios';
import React, {createContext, useContext, useReducer} from 'react';
import { apiURL, LOCAL_STORAGE_TOKEN_NAME } from './Constants';
import { authReducer } from '../Reducer/AuthReducer';


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [authState, dispatch ] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    });

    // Login
    const loginUser = async userForm  => {
        try {
            const response = await axios.post(`${apiURL}/auth/login`, userForm)
            if(response.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME);
                return response.data
            }
        }
        catch (error) {
            if (error.response.data) return error.response.data;
            else return {success: false , message: error.message};
        }
    }

    // Context data
    const AuthContextData = {
        loginUser,
    }

    

    // return component provider
    return (
        <AuthContext.Provider value={AuthContextData} >
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContextProvider;