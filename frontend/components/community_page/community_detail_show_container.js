import CommunityDetailShow from './community_detail_show';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
    community: state.entities.communities[ownProps.match.params.worldUrl]
});

export default connect(mSTP, null)(CommunityDetailShow);