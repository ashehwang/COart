import UserPage from './user_page';
import { connect } from 'react-redux';
import { fetchUserByUsername } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    username: ownProps.match.params.username,
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.username]
});

const mDTP = dispatch => ({
    fetchUserByUsername: username => dispatch(fetchUserByUsername(username)),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(UserPage);