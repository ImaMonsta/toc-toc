import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/userActions'
import * as controlActions from '../actions/controlActions'

import Main from './Main'

function mapStateToProps(state) {
    return {
        candidates: state.candidates,
        user: state.user,
        appcontrol: state.appcontrol
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userActions, ...controlActions }, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainApp;