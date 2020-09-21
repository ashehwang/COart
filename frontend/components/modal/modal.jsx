import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../login_form/login_form_container';
import SignUpFormContainer from '../signup_form/signup_form_container';
import CreateCharacterPostFormContainer from '../char_posts_form/create_charpost_form_container';
import DeleteCharacterFormContainer from '../chars_form/delete_char_form_container';
import FullProfile from '../char_page/full_profile';


// import EditCharacterPostFormContainer from '../char_posts_form/edit_charpost_form_container';
// import EditCharacterFormContainer from '../chars_form/edit_char_form_container';
// import CreatePostFormContainer from '../posts/create_post_form_container';
// import EditProfileContainer from '../profile/edit_profile_container';
// import EditPostFormContainer from '../posts/edit_post_form_container';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal.modal) {
        case 'login':
            component = < LoginFormContainer />;
            break;
        case 'signup':
            component = < SignUpFormContainer />;
            break;
        case 'createcharpost':
            component = <CreateCharacterPostFormContainer />;
            break;
        case 'deletechar':
            component = <DeleteCharacterFormContainer character={modal.data} />;
            break;
        case 'showchar':
            component = <FullProfile character={modal.data} />;
            break;
        // case 'editcharpost':
        //     component = <EditCharacterPostFormContainer characterPost={modal.data} />
        //     break;
        // case 'editchar':
        //     component = <EditCharacterFormContainer character={modal.data} />
        // case 'createpost':
        //     component = <CreatePostFormContainer referenceId={modal.referenceId} />;
        //     break;
        // case 'edituser':
        //     component = <EditProfileContainer />;
        //     break;
        // case 'editpost':
        //     component = <EditPostFormContainer post={modal.referenceId} />;
        //     break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    modal: state.ui.modal
});

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);