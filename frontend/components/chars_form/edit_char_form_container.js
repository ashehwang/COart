import { connect } from "react-redux";
import EditCharForm from "./edit_char_form";

import { updateChar } from "../../actions/char_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  character: state.entities.characters[ownProps.match.params.characterId],
  notice: "Edit Character",
});

const mDTP = (dispatch) => ({
  updateChar: (formData, id) => dispatch(updateChar(formData, id))
//   closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(EditCharForm);