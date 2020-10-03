import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import LoginFormContainer from '../login_form/login_form_container';
import SignUpFormContainer from '../signup_form/signup_form_container';
import CreateCharacterPostFormContainer from '../char_posts_form/create_charpost_form_container';
import DeleteCharacterFormContainer from '../chars_form/delete_char_form_container';
import EditCharacterPostFormContainer from '../char_posts_form/edit_charpost_form_container';
import FullProfileContainer from '../char_page/full_profile_container';
import ExpelMemberContainer from '../community_forms/expel_member_container';
import DeleteCommunityContainer from '../community_forms/delete_community_container';
import CreateWorldCharPostContainer from '../char_posts_form/create_world_charpost_container';
import EditCommunityContainer from '../community_forms/edit_community_container';
import EditUserContainer from '../user_page/edit_user_container';
import CreatePostContainer from '../user_page_forms/create_post_container';
import EditPostContainer from '../user_page_forms/edit_post_container';

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
        case 'story':
            component = <CreateWorldCharPostContainer referenceId={modal.data}/>;
            break;
        case 'deletechar':
            component = <DeleteCharacterFormContainer character={modal.data} />;
            break;
        case 'showchar':
            component = <FullProfileContainer character={modal.data} />;
            break;            
        case 'editcharpost':
            component = <EditCharacterPostFormContainer characterPost={modal.data} />;
            break;
        case 'expel':
            component = <ExpelMemberContainer character={modal.data} />;
            break;
        case 'apocalypse':
            component = <DeleteCommunityContainer community={modal.data} />;
            break;
        case 'editworld':
            component = <EditCommunityContainer community={modal.data} />;
            break;
        case 'edituser':
            component = <EditUserContainer user={modal.data} />;
            break;
        case 'createpost':
            component = <CreatePostContainer />;
            break;
        case 'editpost':
            component = <EditPostContainer post={modal.data}/>;
            break;
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