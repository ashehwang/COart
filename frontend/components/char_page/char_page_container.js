import { connect } from 'react-redux';
import CharPage from './char_page';
import { fetchRelatedCharacterPosts } from '../../actions/character_post_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    character: state.entities.characters[ownProps.match.params.characterId],
    characterPosts: state.entities.characterPosts,
    characterId: ownProps.match.params.characterId
});

const mDTP = dispatch => ({
    fetchRelatedCharacterPosts: characterId => dispatch(fetchRelatedCharacterPosts(characterId))
});

export default connect(mSTP, mDTP)(CharPage);