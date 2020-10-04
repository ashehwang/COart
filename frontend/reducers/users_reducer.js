import { RECEIVE_CURRENT_USER  } from "../actions/session_actions";
import {  RECEIVE_ALL_USERS, RECEIVE_USER, RECEIVE_UPDATED_USER, RECEIVE_FETCHED_USER } from "../actions/user_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";
import {
  RECEIVE_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST,
  RECEIVE_FRIEND, 
  REMOVE_FRIEND,
} from "../actions/friend_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_CHARACTER_POSTS } from '../actions/character_post_actions';
import { CHANGE_SELECTED_CHAR, REMOVE_CHAR, RECEIVE_CHAR } from "../actions/char_actions";
import { RECEIVE_COMMUNITY_FOLLOW, RECEIVE_COMMUNITY_UNFOLLOW } from '../actions/community_actions';
import { MESSAGE_SEEN } from '../actions/message_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_USER:
      Object.values(action.payload.users).forEach((user) => {
        if (newState[user.id]) {
          newState[user.id] = Object.assign(user, newState[user.id]);
        } else {
          newState[user.id] = user;
        }
      });
      return newState;
    case RECEIVE_UPDATED_USER:
      newState[action.user.id] = Object.assign({}, newState[action.user.id]);
      newState[action.user.id].bio = action.user.bio;
      newState[action.user.id].nick_name = action.user.nick_name;
      newState[action.user.user_name] = Object.assign({}, newState[action.user.user_name]);
      newState[action.user.user_name].bio = action.user.bio;
      newState[action.user.user_name].nick_name = action.user.nick_name;
      if (action.user.photoUrl) {
        newState[action.user.id].photoUrl = action.user.photoUrl;
        newState[action.user.user_name].photoUrl = action.user.photoUrl;
      }
      return newState;
    case RECEIVE_FRIEND_REQUEST:
      newState[action.payload.user.id] = action.payload.user;
      newState[
        action.payload.friendRequest.requestor_id
      ].sentFriendRequests.push(action.payload.friendRequest.requestee_id);
      return newState;
    // case RECEIVE_ALL_POSTS:
    //   if (!action.payload.users) return state;
    //   Object.values(action.payload.users).forEach((user) => {
    //     if (newState[user.id]) {
    //       newState[user.id] = Object.assign(user, newState[user.id]);
    //     } else {
    //       newState[user.id] = user;
    //     }
    //   });
    //   return newState;
    case REMOVE_FRIEND_REQUEST:
      let targetIdx = newState[
        action.payload.friendRequest.requestee_id
      ].receivedFriendRequests.indexOf(action.payload.friendRequest.id);
      newState[
        action.payload.friendRequest.requestee_id
      ].receivedFriendRequests.splice(targetIdx, 1);
      return newState;
    case RECEIVE_FRIEND:
      newState[action.friend.user_id].friendship_ids.push(
        action.friend.friend_id
      );
      return newState;
    case REMOVE_FRIEND:
      let deleteIdx = newState[action.friend.friend_id].friendship_ids.indexOf(
        action.friend.user_id
      );
      newState[action.friend.friend_id].friendship_ids.splice(deleteIdx, 1);
      return newState;
    case RECEIVE_ALL_CHARACTER_POSTS:
      if (!newState[action.payload.user.id]) newState[action.payload.user.id] = action.payload.user;
      return newState;
    case CHANGE_SELECTED_CHAR:
      newState[action.payload.user_id].selected_id = action.payload.selected;
      return newState;
    case REMOVE_CHAR:
      let targetCharIdx = newState[action.character.creator.id].character_ids.indexOf(action.character.id);
      newState[action.character.creator.id].character_ids.splice(targetCharIdx, 1);
      if(action.character.other_char) {
        newState[action.character.creator.id].selected_id = action.character.other_char.id;
        return newState;
      } else if (action.character.was_default){
        newState[action.character.creator.id].selected_id = null;
        return newState;
      }
    case RECEIVE_CHAR: //receiving newly created character
      newState[action.char.creator.id].character_ids.push(action.char.id);
      newState[action.char.creator.id].selected_id = action.char.id;
      return newState;
    case RECEIVE_COMMUNITY_FOLLOW:
      newState[action.follow.user_id].following_community_ids.push(action.follow.community_id);
      return newState;
    case RECEIVE_COMMUNITY_UNFOLLOW:
      let removeIdx = newState[action.follow.user_id].following_community_ids.indexOf(action.follow.community_id);
      newState[action.follow.user_id].following_community_ids.splice(removeIdx, 1);
      return newState;
    case RECEIVE_FETCHED_USER:
      newState[action.payload.user.user_name] = action.payload.user;
      return newState;
    case MESSAGE_SEEN:
      let msgIdx = newState[action.message.user_id].unseen_message_ids.indexOf(action.message.id);
      newState[action.message.user_id].unseen_message_ids.splice(msgIdx, 1);
      return newState;
    // case LOGOUT_CURRENT_USER:
    //   return {};
    default:
      return state;
  }
};

export default usersReducer;