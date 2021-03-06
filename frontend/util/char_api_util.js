export const fetchChars = () =>
  $.ajax({
    method: "GET",
    url: "/api/characters",
  });

export const fetchChar = (charId) =>
  $.ajax({
    method: "GET",
    url: `/api/characters/${charId}`,
  });

export const selectChar = (charId) => (
  $.ajax({
    method: "PATCH",
    url: `/api/characters/${charId}/select`
  })
);

export const updateChar = (formData, id) =>
  $.ajax({
    method: "PATCH",
    url: `/api/characters/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const deleteChar = (charId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/characters/${charId}`,
  });

export const fetchUserChars = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/characters`,
    data: { userId },
  });

export const createChar = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/characters",
    data: formData,
    contentType: false,
    processData: false,
  });

export const followCharacter = (follow) => 
  $.ajax({
    method: "POST",
    url: `/api/characters/${follow.id}/follow`
  });


export const unfollowCharacter = (follow) =>
  $.ajax({
    method: "POST",
    url: `/api/characters/${follow.id}/unfollow`,
  });

// export const likePost = (postLike) =>
//   $.ajax({
//     method: "POST",
//     url: `/api/characters/${postLike.id}/like`,
//   });

// export const unlikePost = (postLike) =>
//   $.ajax({
//     method: "POST",
//     url: `/api/characters/${postLike.id}/unlike`,
//   });
