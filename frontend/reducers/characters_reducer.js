import {
  RECEIVE_ALL_CHARS,
  RECEIVE_CHAR,
  REMOVE_CHAR,
} from "../actions/char_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from '../actions/user_actions';
// import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_CHARACTER_POSTS } from '../actions/character_post_actions';

const charactersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_CHARS:
      if (!action.payload.chars) return {};
      return action.payload.chars;
    case RECEIVE_CHAR:
      newState[action.char.id] = action.char;
      return newState;
    case REMOVE_CHAR:
      delete newState[action.charId];
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.payload.characters) return action.payload.characters;
    case RECEIVE_USER:
      if (action.payload.characters) return action.payload.characters;
    case RECEIVE_ALL_CHARACTER_POSTS:
      newState[action.payload.character.id] = action.payload.character;
      return newState;
    // case RECEIVE_COMMENT:
    //   if (
    //     !state[action.comment.post_id].comment_ids.includes(action.comment.id)
    //   ) {
    //     newState[action.comment.post_id].comment_ids.push(action.comment.id);
    //     return newState;
    //   } else {
    //     return state;
    //   }
    // case REMOVE_COMMENT:
    //   let targetIdx = newState[action.comment.post_id].comment_ids.indexOf(
    //     action.comment.id
    //   );
    //   newState[action.comment.post_id].comment_ids.splice(targetIdx, 1);
    //   return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default charactersReducer;
