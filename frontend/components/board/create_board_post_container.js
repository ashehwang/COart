import { connect } from "react-redux";
import CreateBoardPost from './create_board_post';
import { createBoardPost } from '../../actions/board_post_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    createBoardPost: formData => dispatch(createBoardPost(formData))
});

export default connect(mSTP, mDTP)(CreateBoardPost);