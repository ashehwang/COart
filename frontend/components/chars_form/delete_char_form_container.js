import DeleteCharForm from './delete_char_form';
import { connect } from 'react-redux';
import { deleteChar } from '../../actions/char_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    character: ownProps.character
});

const mDTP = dispatch => ({
    deleteChar: charId => dispatch(deleteChar(charId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(DeleteCharForm);