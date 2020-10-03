// export const fetchCharacterPostComments = (characterPostId) =>
//   $.ajax({
//     url: `/api/character_posts/${characterPostId}/comments`,
//     method: "GET",
//   });

export const createComment = (comment) =>
  $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { comment },
  });

export const deleteComment = (commentId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`,
  });

export const updateComment = (comment) =>
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment },
  });

// export const likeComment = (commentLike) =>
//   $.ajax({
//     method: "POST",
//     url: `/api/comments/${commentLike.id}/like`,
//   });

// export const unlikeComment = (commentLike) =>
//   $.ajax({
//     method: "POST",
//     url: `/api/comments/${commentLike.id}/unlike`,
//   });