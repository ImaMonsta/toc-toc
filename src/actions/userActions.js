import firebase from 'firebase'
import { toastr } from 'react-redux-toastr'
import { push } from 'react-router-redux'

export const CREATE_LOGIN_REQUEST = 'CREATE_LOGIN_REQUEST';
export function createLoginRequest(user) {
    return {
        type: CREATE_LOGIN_REQUEST,
        user
    }
};

export const CREATE_LOGIN_RESPONSE = 'CREATE_LOGIN_RESPONSE';
export function createLoginResponse(user) {
    return {
        type: CREATE_LOGIN_RESPONSE,
        user
    }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export function loginResponse(user) {
    return {
        type: LOGIN_RESPONSE,
        user
    }
}

export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE'
export function logoutResponse() {
    return {
        type: LOGOUT_RESPONSE
    }
}

export const CHECK_USER_STATE_RESPONSE = 'CHECK_USER_STATE_RESPONSE'
export function checkUserStateResponse(user) {
    return {
        type: CHECK_USER_STATE_RESPONSE,
        user
    }
}

export const USER_REQUEST_FAILED = 'USER_REQUEST_FAILED'
export function userRequestFailed(message, code) {
    return {
        type: USER_REQUEST_FAILED,
        message,
        code
    }
}

export function checkUserState() {
    return dispatch => {
        return firebase.auth()
            .onAuthStateChanged(user => { dispatch(checkUserStateResponse(user)); });
    }
}

export function logout() {
    return dispatch => {
        return firebase.auth().signOut()
            .then(response => {
                toastr.info(``, `Good Bye!`);
                dispatch(push('/'));
                dispatch(logoutResponse());
            })
            .catch(error => {
                const { code, message } = error;
                toastr.error(`Error: ${code}`, `${message}`);
            })
    }
}

export function login(email, password) {
    return dispatch => {
        dispatch(loginRequest());
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                toastr.info(``, `Welcome!`);
                dispatch(push('/'))
                dispatch(loginResponse(user));
            })
            .catch(error => {
                const { code, message } = error;
                toastr.error(`Error: ${code}`, `${message}`);
            });
    }
}

export function createLogin(user) {
    return dispatch => {
        dispatch(createLoginRequest(user));
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(user => {
                toastr.info(``, `Welcome!`);
                dispatch(push('/'))
                dispatch(createLoginResponse(user));
            })
            .catch(error => {
                const { code, message } = error;
                toastr.error(`Error: ${code}`, `${message}`);
            });
    }

}