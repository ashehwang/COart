import ExpelMember from './expel_member';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { deleteMembership } from '../../actions/membership_actions';

const mSTP = (state, ownProps) => ({
    character: ownProps.character
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteMembership: membershipId => dispatch(deleteMembership(membershipId))
});

export default connect(mSTP, mDTP)(ExpelMember);