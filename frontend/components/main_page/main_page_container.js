import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPublicCharacterPosts } from '../../actions/character_post_actions';
import { createComment } from '../../actions/comment_actions';

const mSTP = (state) => ({
  characterPosts: Object.values(state.entities.characterPosts),
  characters: state.entities.characters,
  // users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
  fetchPublicCharacterPosts: () => dispatch(fetchPublicCharacterPosts()),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(MainPage);