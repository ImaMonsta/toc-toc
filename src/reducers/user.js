import { CREATE_LOGIN_REQUEST, CREATE_LOGIN_RESPONSE } from '../actions/userActions'

function user(state = [], action) {
    switch (action.type) {
        case CREATE_LOGIN_REQUEST:
            break;
        case CREATE_LOGIN_RESPONSE:
            console.log(state);
            break;
        default:
            break;
    }
    console.log(state, action);
    return state;
}

export default user;