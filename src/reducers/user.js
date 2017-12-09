import { CREATE_LOGIN_REQUEST, CREATE_LOGIN_RESPONSE, LOGIN_RESPONSE, LOGOUT_RESPONSE, LOGIN_REQUEST, CHECK_USER_STATE_RESPONSE } from '../actions/userActions'

function user(state = [], action) {
    switch (action.type) {
        case LOGOUT_RESPONSE:
        case CREATE_LOGIN_REQUEST:
        case LOGIN_REQUEST:
            return {};
        case LOGIN_RESPONSE:
        case CREATE_LOGIN_RESPONSE:
        case CHECK_USER_STATE_RESPONSE:
            if (!action.user) return {}
            const { email, uid } = action.user;
            return  {
                email,
                uid
            }
        default:
            break;
    }
    return state;
}

export default user;