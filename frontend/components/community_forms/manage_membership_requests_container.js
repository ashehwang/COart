import ManageMembershipRequests from './manage_membership_requests'
import { connect } from "react-redux";
import { createMembershipRequest, deleteMembershipRequest, createMembership } from "../../actions/membership_actions";
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id],
  community: state.entities.communities[ownProps.match.params.worldUrl],
  characters: state.entities.characters,
  membershipRequests: state.entities.membershipRequests
});

const mDTP = (dispatch) => ({
  createMembershipRequest: (membershipRequest) => dispatch(createMembershipRequest(membershipRequest)),
  deleteMembershipRequest: membershipRequestId => dispatch(deleteMembershipRequest(membershipRequestId)),
  createMembership: membership => dispatch(createMembership(membership)),
  openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(ManageMembershipRequests);
