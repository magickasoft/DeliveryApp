import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginStatus from '../components/LoginStatus'

import * as settingsActions from '../actions/settings'
import * as photoActions from '../actions/photoPicker'

function stateToProps(state) {

    const { autoRehydrated, settings, photopiker } = state;
    return { autoRehydrated, settings, photopiker };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({},settingsActions,photoActions);
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(LoginStatus)
