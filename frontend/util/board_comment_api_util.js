export const fetchBoardPostComments = (boardPostId) =>
  $.ajax({
    url: `/api/board_posts/${boardPostId}/board_comments`,
    method: "GET",
  });

export const createBoardComment = (boardComment) =>
  $.ajax({
    method: "POST",
    url: `/api/board_comments`,
    data: { boardComment },
  });

export const deleteBoardComment = (boardCommentId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/board_comments/${boardCommentId}`,
  });

export const updateBoardComment = (boardComment) =>
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${boardComment.id}`,
    data: { boardComment },
  });