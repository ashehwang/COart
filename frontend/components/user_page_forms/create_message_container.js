import CreateMessage from "./create_message";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createMessage } from '../../actions/message_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: ownProps.user
});

const mDTP = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(CreateMessage);
