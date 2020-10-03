import UserPosts from './user_posts';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    username: ownProps.match.params.username,
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    user: state.entities.users[ownProps.match.params.username]
});

const mDTP = dispatch => ({
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(UserPosts);