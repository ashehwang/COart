import { connect } from "react-redux";
import EditCharPostForm from './edit_charpost_form';

import { updateChar } from "../../actions/char_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  // character: state.entities.characters,
  notice: "Edit Character"
});

const mDTP = (dispatch) => ({
  action: (formData, id) => dispatch(updateChar(formData, id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(EditCharPostForm);