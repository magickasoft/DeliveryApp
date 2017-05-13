import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TakePhoto from '../components/TakePhoto'

import * as photoActions from '../actions/photoPicker'
import * as settingsActions from '../actions/settings'

function stateToProps(state) {

    const { autoRehydrated, photopiker, settings  } = state;
    return { autoRehydrated, photopiker, settings };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({}, photoActions, settingsActions);
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(TakePhoto)
