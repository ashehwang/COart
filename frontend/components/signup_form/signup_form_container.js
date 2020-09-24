import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mSTP = (state) => ({
    errors: state.errors.session
});

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SignupForm);