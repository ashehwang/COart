import { connect } from "react-redux";
import CharForm from './char_form';

import { updateChar } from "../../actions/char_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  char: state.entities.characters
});

const mDTP = (dispatch) => ({
  action: (formData, id) => dispatch(updateChar(formData, id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(CharForm);