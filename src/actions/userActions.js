import firebase from 'firebase'

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
export function createLoginFailed(errorMessage, errorCode) {
    return {
        type: CREATE_LOGIN_FAILED,
        errorMessage,
        errorCode
    }
}

export function createLogin(user) {
    return dispatch => {
        dispatch(createLoginRequest(user));
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                console.log(response);
                dispatch(createLoginResponse(response));
            })
            .catch(error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch(createLoginFailed(errorMessage, errorCode))
                console.log(errorCode, errorMessage)
            });
    }

}