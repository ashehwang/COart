import CommentShow from './comment_show';
import { connect } from 'react-redux';
import { deleteComment, updateComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: state.entities.comments[ownProps.commentId],
    loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(mSTP, mDTP)(CommentShow);