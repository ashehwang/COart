import { connect } from 'react-redux';
import ArtLog from './art_log';
import { closeModal, openMoal } from '../../actions/modal_actions';

const mSTP = state => ({

});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(ArtLog);