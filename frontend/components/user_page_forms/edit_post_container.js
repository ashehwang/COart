import EditPost from "./edit_post";
import { connect } from "react-redux";
import { updatePost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  post: ownProps.post
});

const mDTP = (dispatch) => ({
  updatePost: (formData, postId) => dispatch(updatePost(formData, postId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(EditPost);
