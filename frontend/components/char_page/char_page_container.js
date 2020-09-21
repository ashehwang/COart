import { connect } from 'react-redux';
import CharPage from './char_page';
import { fetchRelatedCharacterPosts } from '../../actions/character_post_actions';
import { openModal } from '../../actions/modal_actions';
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    character: state.entities.characters[ownProps.match.params.characterId],
    users: state.entities.users,
    characterPosts: Object.values(state.entities.characterPosts),
    characterId: ownProps.match.params.characterId,
    loggedIn: Boolean(state.session.id)
});

const mDTP = dispatch => ({
    fetchRelatedCharacterPosts: characterId => dispatch(fetchRelatedCharacterPosts(characterId)),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CharPage);