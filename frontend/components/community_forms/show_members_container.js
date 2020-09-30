// import ManageMembershipRequests from "./manage_membership_requests";
import ShowMembers from './show_members'
import { connect } from "react-redux";
import { createMembership, deleteMembership } from "../../actions/membership_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id],
  community: state.entities.communities[ownProps.match.params.worldUrl],
  characters: state.entities.characters
});

const mDTP = (dispatch) => ({
  createMembership: (membership) => dispatch(createMembership(membership)),
  deleteMembership: (membershipId) => dispatch(deleteMembership(membershipId)),
  openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(ShowMembers);
