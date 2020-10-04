import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const MESSAGE_SENT = "MESSAGE_SENT";
export const MESSAGE_SEEN = "MESSAGE_SEEN";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveAllMessages = (messages) => ({
  type: RECEIVE_ALL_MESSAGES,
  messages,
});

const messageSent = () => ({
  type: MESSAGE_SENT,
});

const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message,
});

const changeMessageSeen = (message) => ({
  type: MESSAGE_SEEN,
  message,
});

export const fetchAllMessages = (userId) => (dispatch) =>
  MessageApiUtil.fetchAllMessages(userId).then((messages) =>
    dispatch(receiveAllMessages(messages))
  );

export const createMessage = (message) => (dispatch) =>
  MessageApiUtil.createMessage(message).then(
    (message) => dispatch(messageSent()),
    (err) => console.log(err)
  );

export const deleteMessage = (messageId) => (dispatch) =>
  MessageApiUtil.deleteMessage(messageId).then((message) =>
    dispatch(removeMessage(message))
  );

export const seenMessage = (messageId) => dispatch => 
  MessageApiUtil.seenMessage(messageId).then((message) => 
    dispatch(changeMessageSeen(message))
  );