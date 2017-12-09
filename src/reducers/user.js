import { CREATE_LOGIN_REQUEST, CREATE_LOGIN_RESPONSE, CREATE_LOGIN_FAILED, LOGIN_RESPONSE } from '../actions/userActions'

function user(state = [], action) {
    switch (action.type) {
        case CREATE_LOGIN_REQUEST:
            break;
        case LOGIN_RESPONSE:
        case CREATE_LOGIN_RESPONSE:
            const { email, uid } = action.response;
            return {
                ...state,
                'user': {
                    email,
                    uid
                }
            }
        case CREATE_LOGIN_FAILED:
            break;
        default:
            break;
    }
    return state;
}

export default user;