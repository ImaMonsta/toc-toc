function user(state = [], action) {
    switch (action.type) {
        case 'SIGN_UP_CANDIDATE':
            break;
        default:
            return state;
    }
    console.log(state, action);
    return state;
}

export default user;