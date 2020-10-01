import { connect } from "react-redux";
import { createCharacterPost } from "../../actions/character_post_actions";
import { closeModal } from "../../actions/modal_actions";
import CreateWorldCharPost from './create_world_charpost';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  character: state.entities.characters[state.entities.users[state.session.id].selected_id],
  referenceId: ownProps.referenceId
});

const mDTP = (dispatch) => ({
  createCharacterPost: (characterPost) => dispatch(createCharacterPost(characterPost)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(CreateWorldCharPost);
