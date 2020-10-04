export const createMessage = (message) =>
  $.ajax({
    method: "POST",
    url: `/api/messages`,
    data: { message },
  });

export const deleteMessage = (messageId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/messages/${messageId}`,
  });

export const fetchAllMessages = (user_id) =>
  $.ajax({
    method: "GET",
    url: `/api/messages`,
    data: { user_id },
  });

export const seenMessage = (messageId) =>
  $.ajax({
    method: "PATCH",
    url: `/api/messages/${messageId}`,
    data: { "message[seen]": true }
  });