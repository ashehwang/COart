import EditUser from './edit_user';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
    user: ownProps.user,
    // loggedIn: Boolean(state.session.id)
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    editUser: (formData, userId) => dispatch(editUser(formData, userId))
});

export default connect(mSTP, mDTP)(EditUser);