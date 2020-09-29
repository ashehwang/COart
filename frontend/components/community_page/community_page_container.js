import CommunityPage from './community_page';
import { connect } from 'react-redux';
import { fetchCommunityByUrl } from '../../actions/community_actions';

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    worldUrl: ownProps.match.params.worldUrl,
    community: state.entities.communities[ownProps.match.params.worldUrl]
});

const mDTP = (dispatch) => ({
  fetchCommunityByUrl: (worldUrl) => dispatch(fetchCommunityByUrl(worldUrl)),
});

export default connect(mSTP, mDTP)(CommunityPage)