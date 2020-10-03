import UserPosts from './user_posts';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';
import { createUserComment } from '../../actions/user_comment_actions'

const mSTP = (state, ownProps) => ({
    username: ownProps.match.params.username,
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    user: state.entities.users[ownProps.match.params.username],
    userComments: state.entities.userComments
});

const mDTP = dispatch => ({
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    deletePost: postId => dispatch(deletePost(postId)),
    createUserComment: userComment => dispatch(createUserComment(userComment))
});

export default connect(mSTP, mDTP)(UserPosts);