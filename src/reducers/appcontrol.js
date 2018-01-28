import { TOOGLE_REGISTER, TOOGLE_EDIT_CANDIDATE, OPTION_MENU_EDIT_CANDIDATE } from '../actions/controlActions'

function appcontrol(state = [], action) {
    switch (action.type) {
        case TOOGLE_REGISTER:
            return {
                ...state,
                'registerIsCandidate' : action.isOn
            }
        case TOOGLE_EDIT_CANDIDATE:
            return {
                ...state,
                'editCandidate': !state.editCandidate 
            }
        case OPTION_MENU_EDIT_CANDIDATE:
            return {
                ...state,
                'optionMenuCandidate': action.option
            }
        default:
            break;
    }
    return state;
}

export default appcontrol;