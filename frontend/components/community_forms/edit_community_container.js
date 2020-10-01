import EditCommunity from './edit_community';
import { connect } from 'react-redux';
import { updateCommunity } from '../../actions/community_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    community: ownProps.community
});

const mDTP = dispatch => ({
    updateCommunity: (formData, communityId) => dispatch(updateCommunity(formData, communityId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditCommunity);