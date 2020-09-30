import CommunityApply from './community_apply';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    characters: state.entities.characters,
    community: state.entities.communities[ownProps.match.params.worldUrl]
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(CommunityApply);