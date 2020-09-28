import CommunitiesPage from './communities_page';
import { connect } from 'react-redux';
import { fetchAllOpenCommunities } from '../../actions/community_actions';

const mSTP = state => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    communities: Object.values(state.entities.communities)
});

const mDTP = dispatch => ({
    fetchAllOpenCommunities: () => dispatch(fetchAllOpenCommunities())
});

export default connect(mSTP, mDTP)(CommunitiesPage);