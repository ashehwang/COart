import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";

// const mapStateToProps = (state) => ({
//   errors: state.errors.session,
// });

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);