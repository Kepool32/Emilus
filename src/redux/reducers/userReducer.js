import * as actionTypes from '../constants/Users';


const initialState = {
    users: [],
    loading: false,
    error: null,
    user: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        case actionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case actionTypes.DELETE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case actionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;