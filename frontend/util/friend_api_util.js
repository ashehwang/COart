export const createFriendRequest = (friendRequest) =>
  $.ajax({
    method: "POST",
    url: "/api/friend_requests",
    data: { friendRequest },
  });

export const deleteFriendRequest = (friendRequestId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/friend_requests/${friendRequestId}`,
  });

export const createFriend = (friend) =>
  $.ajax({
    method: "POST",
    url: "/api/friends",
    data: { friend },
  });

export const deleteFriend = (friendId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/friends/${friendId}`,
  });

export const createMutualFriend = (friend) =>
  $.ajax({
    method: "POST",
    url: "/api/friends",
    data: { friend },
  });
