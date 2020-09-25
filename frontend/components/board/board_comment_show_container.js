import { connect } from 'react-redux';
import BoardCommentShow from './board_comment_show';
import { updateBoardComment, deleteBoardComment } from "../../actions/board_comment_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id),
    boardComment: state.entities.boardComments[ownProps.boardCommentId]
});

const mDTP = dispatch => ({
    updateBoardComment: (boardComment) => dispatch(updateBoardComment(boardComment)),
    deleteBoardComment: boardCommentId => dispatch(deleteBoardComment(boardCommentId))
});

export default connect(mSTP, mDTP)(BoardCommentShow);