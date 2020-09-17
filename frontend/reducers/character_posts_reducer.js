import { RECEIVE_ALL_CHARACTER_POSTS, RECEIVE_CHARACTER_POST, REMOVE_CHARACTER_POST } from '../actions/character_post_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const characterPostsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_CHARACTER_POSTS:
            if(!action.payload.character_posts) return {};
            return action.payload.character_posts;
        case RECEIVE_CHARACTER_POST:
            newState[action.characterPost.id] = action.characterPost;
            return newState;
        case REMOVE_CHARACTER_POST:
            delete newState[action.characterPostId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default characterPostsReducer;