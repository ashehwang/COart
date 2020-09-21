import { connect } from "react-redux";
import FullProfile from './full_profile'
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    character: ownProps.character
});

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(FullProfile);