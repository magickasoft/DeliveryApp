import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Settings from '../components/Settings'

import * as settingsActions from '../actions/settings'

function stateToProps(state) {

    const { autoRehydrated, settings } = state;
    return { autoRehydrated, settings };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({},settingsActions);
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Settings)
