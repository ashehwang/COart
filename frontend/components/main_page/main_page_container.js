import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPublicCharacterPosts, deleteCharacterPost } from '../../actions/character_post_actions';
import { createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  characterPosts: Object.values(state.entities.characterPosts),
  characters: state.entities.characters,
  currentUser: state.entities.users[state.session.id],
  loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
  fetchPublicCharacterPosts: () => dispatch(fetchPublicCharacterPosts()),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteCharacterPost: (characterPostId) => dispatch(deleteCharacterPost(characterPostId)),
  openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(MainPage);