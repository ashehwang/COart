import UserCharsShow from './user_chars_show';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  characters: state.entities.characters,
  username: ownProps.match.params.username,
//   loggedIn: Boolean(state.session.id),
//   currentUser: state.entities.users[state.session.id],
  character_ids: state.entities.users[ownProps.match.params.username].character_ids
});

export default connect(mSTP, null)(UserCharsShow);