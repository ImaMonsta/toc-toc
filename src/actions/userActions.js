import firebase from 'firebase'
import {toastr} from 'react-redux-toastr' 
import { push } from 'react-router-redux'

export const CREATE_LOGIN_REQUEST = 'CREATE_LOGIN_REQUEST';
export function createLoginRequest(user) {
    return {
        type: CREATE_LOGIN_REQUEST,
        user
    }
};

export const CREATE_LOGIN_RESPONSE = 'CREATE_LOGIN_RESPONSE';
export function createLoginResponse(response) {
    return {
        type: CREATE_LOGIN_RESPONSE,
        response
    }
}

export const CREATE_LOGIN_FAILED = 'CREATE_LOGIN_FAILED';
export function createLoginFailed(message, code) {
    return {
        type: CREATE_LOGIN_FAILED,
        message,
        code
    }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export function loginResponse(response) {
    return {
        type: LOGIN_RESPONSE,
        response
    }
}

export const LOGIN_FAILED = 'LOGIN_FAILED'
export function loginFailed(message, code) {
    return {
        type: LOGIN_FAILED,
        message,
        code
    }
}

export function login(email, password) {
    return dispatch => {
        dispatch(loginRequest());
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then( response => {
            dispatch(loginResponse(response));
            dispatch(push('/'))
        })
        .catch( error => {
            const { code, message } = error;
            toastr.error(`Error: ${code}`, `${message}`);
        });
    }
}

export function createLogin(user) {
    return dispatch => {
        dispatch(createLoginRequest(user));
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                dispatch(createLoginResponse(response));
            })
            .catch(error => {
                const { code, message } = error;
                toastr.error(`Error: ${code}`, `${message}`);
            });
    }

}