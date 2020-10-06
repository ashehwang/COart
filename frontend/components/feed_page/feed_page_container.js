import { connect } from 'react-redux';
import FeedPage from './feed_page';
import { fetchFollowingCharacterPosts, deleteCharacterPost } from '../../actions/character_post_actions';
import { createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  characterPosts: Object.values(state.entities.characterPosts),
  characters: state.entities.characters,
  currentUser: state.entities.users[state.session.id],
  loggedIn: Boolean(state.session.id),
  communities: state.entities.communities
});

const mDTP = (dispatch) => ({
  fetchFollowingCharacterPosts: (userId, page) => dispatch(fetchFollowingCharacterPosts(userId, page)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteCharacterPost: (characterPostId) => dispatch(deleteCharacterPost(characterPostId)),
  openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(FeedPage);