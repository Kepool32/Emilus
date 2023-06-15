

import * as actionTypes from '../constants/Users';
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_USERS_REQUEST });

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            dispatch({ type: actionTypes.FETCH_USERS_SUCCESS, payload: users });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_USERS_ERROR, payload: error.message });
        }
    };
};


export const deleteUser = (userId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_USER_REQUEST });

        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            dispatch({ type: actionTypes.DELETE_USER_SUCCESS, payload: userId });
        } catch (error) {
            dispatch({ type: actionTypes.DELETE_USER_ERROR, payload: error.message });
        }
    };
};



export const fetchUser = (userId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_USER_REQUEST });

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = response.data;
            dispatch({ type: actionTypes.FETCH_USER_SUCCESS, payload: user });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_USER_ERROR, payload: error.message });
        }
    };
};



