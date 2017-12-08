import firebase from 'firebase'
import { CREATE_LOGIN } from '../actions/userActions'

function createUser(user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}

function user(state = [], action) {
    switch (action.type) {
        case CREATE_LOGIN:
            createUser(action.user);
            state = action.user;
            break;
        default:
            break;
    }
    console.log(state, action);
    return state;
}

export default user;