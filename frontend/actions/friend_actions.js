import * as FriendApiUtil from "../util/friend_api_util";

export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

const receiveFriendRequest = (payload) => ({
  type: RECEIVE_FRIEND_REQUEST,
  payload,
});

const removeFriendRequest = (payload) => ({
  type: REMOVE_FRIEND_REQUEST,
  payload,
});

const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend,
});

const removeFriend = (friend) => ({
  type: REMOVE_FRIEND,
  friend,
});

export const makeFriendRequest = (friendRequest) => (dispatch) =>
  FriendApiUtil.createFriendRequest(friendRequest).then((friendRequest) =>
    dispatch(receiveFriendRequest(friendRequest))
  );

export const deleteFriendRequest = (friendRequestId) => (dispatch) =>
  FriendApiUtil.deleteFriendRequest(friendRequestId).then((payload) =>
    dispatch(removeFriendRequest(payload))
  );

export const createFriend = (friend) => (dispatch) =>
  FriendApiUtil.createFriend(friend).then((friend) =>
    dispatch(receiveFriend(friend))
  );

export const deleteFriend = (friendId) => (dispatch) =>
  FriendApiUtil.deleteFriend(friendId).then((friend) =>
    dispatch(removeFriend(friend))
  );
