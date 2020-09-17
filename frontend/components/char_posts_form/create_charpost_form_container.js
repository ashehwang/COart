import { connect } from 'react-redux';
import { createCharacterPost} from '../../actions/character_post_actions';
import { closeModal } from '../../actions/modal_actions';
import CreateCharacterPostForm from './create_charpost_form';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    createCharacterPost: characterPost => dispatch(createCharacterPost(characterPost)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreateCharacterPostForm)