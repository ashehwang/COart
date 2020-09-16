import { connect } from "react-redux";
import CharForm from "./char_form";
import { createChar } from "../../actions/char_actions";
// import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  character: { first_name: "", last_name: "", bio: "", head_photoFile: null, head_photoUrl: null, body_photoFile: null, body_photoUrl: null },
  notice: "Create Character"
});

const mDTP = (dispatch) => ({
  createChar: (formData) => dispatch(createChar(formData)),
//   closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(CharForm);