import { connect } from "react-redux";
import EditCharPostForm from './edit_charpost_form';
import { updateCharacterPost } from "../../actions/character_post_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  characterPost: ownProps.characterPost,
  character: state.entities.characters[state.entities.users[state.session.id].selected_id]
});

const mDTP = (dispatch) => ({
  updateCharacterPost: (formData, id) => dispatch(updateCharacterPost(formData, id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(EditCharPostForm);