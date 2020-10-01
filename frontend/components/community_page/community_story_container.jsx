import CommunityStory from './community_story';
import { connect } from "react-redux";
import { fetchCommunityByUrl } from "../../actions/community_actions";
import { openModal } from "../../actions/modal_actions";
import { createComment } from '../../actions/comment_actions';
import { deleteCharacterPost } from '../../actions/character_post_actions';

const mSTP = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id],
  worldUrl: ownProps.match.params.worldUrl,
  community: state.entities.communities[ownProps.match.params.worldUrl],
//   character: state.entities.characters[state.entities.users[state.session.id].selected_id],
  characterPosts: Object.values(state.entities.characterPosts),
  characters: state.entities.characters
});

const mDTP = (dispatch) => ({
  fetchCommunityByUrl: (worldUrl) => dispatch(fetchCommunityByUrl(worldUrl)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteCharacterPost: (characterPostId) => dispatch(deleteCharacterPost(characterPostId))
});

export default connect(mSTP, mDTP)(CommunityStory);