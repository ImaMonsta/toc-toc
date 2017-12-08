export const CREATE_LOGIN = 'CREATE_LOGIN';
export function createLogin(user) {
    return {
        type: CREATE_LOGIN,
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