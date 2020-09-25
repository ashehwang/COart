import { connect } from "react-redux";
import EditBoardPost from './edit_board_post'
import { fetchBoardPost, updateBoardPost } from "../../actions/board_post_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  boardPost: state.entities.boardPosts[ownProps.match.params.boardPostId]
});

const mDTP = (dispatch) => ({
  updateBoardPost: (formData, id) => dispatch(updateBoardPost(formData, id)),
  fetchBoardPost: boardPostId => dispatch(fetchBoardPost(boardPostId))
});

export default connect(mSTP, mDTP)(EditBoardPost);
