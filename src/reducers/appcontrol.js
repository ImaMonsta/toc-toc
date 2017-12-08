import { TOOGLE_REGISTER } from '../actions/controlActions'

function appcontrol(state = [], action) {
    switch (action.type) {
        case TOOGLE_REGISTER:
            return {
                ...state,
                'registerIsCandidate' : action.isOn
            }
        default:
            break;
    }
    return state;
}

export default appcontrol;