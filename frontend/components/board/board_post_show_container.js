import { connect } from 'react-redux';
import BoardPostShow from './board_post_show';
import { fetchBoardPost } from '../../actions/board_post_actions';

const mSTP = (state, ownProps) => ({
    boardPost: state.entities.boardPosts[ownProps.match.params.boardPostId],
    currentUser: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
  fetchBoardPost: (boardPostId) => dispatch(fetchBoardPost(boardPostId))
});

export default connect(mSTP, mDTP)(BoardPostShow);