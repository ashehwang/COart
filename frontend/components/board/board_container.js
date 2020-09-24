import { connect } from 'react-redux';
import Board from './board';
import { fetchAllBoardPosts } from '../../actions/board_post_actions';

const mSTP = state => ({
    boardPosts: Object.values(state.entities.boardPosts),
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllBoardPosts: tagId => dispatch(fetchAllBoardPosts(tagId))
});

export default connect(mSTP, mDTP)(Board)