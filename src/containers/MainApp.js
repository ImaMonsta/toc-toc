import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

function mapStateToProps(state) {
    return {
        candidates: state.candidates,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainApp;