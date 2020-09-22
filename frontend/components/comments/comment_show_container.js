import CommentShow from './comment_show';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: state.entities.comments[ownProps.commentId]
});

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentShow);