import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import First_tab from '../components/FeedUsers'

function stateToProps(state) {

    const { autoRehydrated } = state;
    return { autoRehydrated };
}

function dispatchToProps(dispatch) {

    const actions = Object.assign({});
    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(First_tab)
