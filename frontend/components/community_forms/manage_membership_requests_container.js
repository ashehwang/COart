import ManageMembershipRequests from './manage_membership_requests'
import { connect } from "react-redux";
import { createMembershipRequest } from "../../actions/membership_actions";

const mSTP = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id],
  characters: state.entities.characters,
  community: state.entities.communities[ownProps.match.params.worldUrl],
});

const mDTP = (dispatch) => ({
  createMembershipRequest: (membershipRequest) =>
    dispatch(createMembershipRequest(membershipRequest)),
});

export default connect(mSTP, mDTP)(ManageMembershipRequests);
