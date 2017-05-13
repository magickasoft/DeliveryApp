import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'

function stateToProps(state) {

    const { autoRehydrated } = state;
    return { autoRehydrated };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({});
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Home)
