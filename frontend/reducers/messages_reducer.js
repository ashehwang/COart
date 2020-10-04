import { RECEIVE_ALL_MESSAGES, MESSAGE_SENT, REMOVE_MESSAGE, MESSAGE_SEEN } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
        return action.messages;
    case MESSAGE_SENT:
        return newState;
    case REMOVE_MESSAGE:
        delete newState[action.message.id];
        return newState;
    case MESSAGE_SEEN:
        newState[action.message.id].seen = true;
        return newState;
    default:
      return state;
  }
};

export default messagesReducer;
