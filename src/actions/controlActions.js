export const TOOGLE_REGISTER = 'TOOGLE_REGISTER';
export function toogleRegister(isOn){
    return {
        type: TOOGLE_REGISTER,
        isOn
    }
};

export const TOOGLE_EDIT_CANDIDATE = 'TOOGLE_EDIT_CANDIDATE'
export function toogleCandidate() {
    return {
        type: TOOGLE_EDIT_CANDIDATE,
    }
}

export const OPTION_MENU_EDIT_CANDIDATE = 'OPTION_MENU_EDIT_CANDIDATE'
export function optionMenuEditCandidate(option) {
    return {
        type: OPTION_MENU_EDIT_CANDIDATE,
        option
    }
}