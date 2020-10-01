import DeleteCommunity from './delete_community';
import { connect } from "react-redux";

import { closeModal } from "../../actions/modal_actions";
import { deleteCommunity } from '../../actions/community_actions';

const mSTP = (state, ownProps) => ({
  community: ownProps.community,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  deleteCommunity: communityId => dispatch(deleteCommunity(communityId))
});

export default connect(mSTP, mDTP)(DeleteCommunity);
