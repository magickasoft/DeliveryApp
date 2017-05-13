import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CameraRollPicker from '../components/CameraRollPicker'

import * as photoActions from '../actions/photoPicker'

function stateToProps(state) {

    const { autoRehydrated, photopiker  } = state;
    return { autoRehydrated, photopiker };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({}, photoActions);
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(CameraRollPicker)
