import CreateCommunity from './create_community';
import { connect } from 'react-redux';
import { createCommunity } from '../../actions/community_actions'

const mSTP = state => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    createCommunity: formData => dispatch(createCommunity(formData))
});

export default connect(mSTP, mDTP)(CreateCommunity);