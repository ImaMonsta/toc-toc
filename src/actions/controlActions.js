export const TOOGLE_REGISTER = 'TOOGLE_REGISTER';
export function toogleRegister(isOn){
    return {
        type: TOOGLE_REGISTER,
        isOn
    }
};