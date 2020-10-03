import CreatePost from './create_post';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    createPost: formData => dispatch(createPost(formData)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreatePost);