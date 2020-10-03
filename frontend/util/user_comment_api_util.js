// export const fetchCharacterPostComments = (characterPostId) =>
//   $.ajax({
//     url: `/api/character_posts/${characterPostId}/comments`,
//     method: "GET",
//   });

export const createUserComment = (user_comment) =>
  $.ajax({
    method: "POST",
    url: `/api/user_comments`,
    data: { user_comment },
  });

export const deleteUserComment = (userCommentId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/user_comments/${userCommentId}`,
  });

export const updateUserComment = (user_comment) =>
  $.ajax({
    method: "PATCH",
    url: `/api/user_comments/${user_comment.id}`,
    data: { user_comment },
  });