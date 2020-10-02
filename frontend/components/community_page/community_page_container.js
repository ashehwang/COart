import CommunityPage from './community_page';
import { connect } from 'react-redux';
import { fetchCommunityByUrl, followCommunity, unfollowCommunity } from '../../actions/community_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    worldUrl: ownProps.match.params.worldUrl,
    community: state.entities.communities[ownProps.match.params.worldUrl]
});

const mDTP = (dispatch) => ({
  fetchCommunityByUrl: (worldUrl) => dispatch(fetchCommunityByUrl(worldUrl)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  followCommunity: follow => dispatch(followCommunity(follow)),
  unfollowCommunity: unfollow => dispatch(unfollowCommunity(unfollow))
});

export default connect(mSTP, mDTP)(CommunityPage)