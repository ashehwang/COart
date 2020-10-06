import { RECEIVE_ALL_CHARACTER_POSTS, RECEIVE_CHARACTER_POST, REMOVE_CHARACTER_POST, RECEIVE_PUBLIC_CHARACTER_POSTS, RECEIVE_PAGE_CHARACTER_POSTS, RECEIVE_FOLLOWING_CHARACTER_POSTS } from '../actions/character_post_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_VIEWING_COMMUNITY } from '../actions/community_actions';

const characterPostsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FOLLOWING_CHARACTER_POSTS:
            if(!action.payload.characterPosts) return {};
            return action.payload.characterPosts;
        case RECEIVE_PAGE_CHARACTER_POSTS:
            if (!action.payload.characterPosts) return {};
            return action.payload.characterPosts;
        case RECEIVE_ALL_CHARACTER_POSTS:
            if(!action.payload.characterPosts) return {};
            return action.payload.characterPosts;
        case RECEIVE_CHARACTER_POST:
            newState[action.characterPost.id] = action.characterPost;
            return newState;
        case REMOVE_CHARACTER_POST:
            delete newState[action.characterPostId];
            return newState;
        case RECEIVE_PUBLIC_CHARACTER_POSTS:
            if (!action.payload.characterPosts) return {};
            return action.payload.characterPosts;
        case RECEIVE_COMMENT:
            if (!state[action.comment.character_post_id].comment_ids.includes(action.comment.id)) {
            newState[action.comment.character_post_id].comment_ids.push(action.comment.id);
            return newState;
            } else return newState;
        case REMOVE_COMMENT:
            let targetIdx = newState[action.comment.character_post_id].comment_ids.indexOf(action.comment.id);
            newState[action.comment.character_post_id].comment_ids.splice(targetIdx, 1);
            return newState;
        case RECEIVE_VIEWING_COMMUNITY:
            if(!action.payload.characterPosts) return {};
            return action.payload.characterPosts;        
        // case LOGOUT_CURRENT_USER:
        //     return {};
        default:
            return state;
    }
}

export default characterPostsReducer;