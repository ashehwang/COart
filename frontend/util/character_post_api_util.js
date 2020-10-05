export const fetchPublicCharacterPosts = () =>
  $.ajax({
    method: "GET",
    url: "/api/character_posts",
  });

export const fetchCharacterPost = (characterPostId) =>
  $.ajax({
    method: "GET",
    url: `/api/character_posts/${characterPostId}`,
  });

export const updateCharacterPost = (formData, id) =>
  $.ajax({
    method: "PATCH",
    url: `/api/character_posts/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const deleteCharacterPost = (characterPostId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/character_posts/${characterPostId}`,
  });

export const fetchUserCharacterPosts = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/character_posts`,
    data: { userId },
  });

export const fetchRelatedCharacterPosts = (characterId) =>
  $.ajax({
    method: "GET",
    url: `/api/character_posts`,
    data: { characterId },
  });

export const createCharacterPost = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/character_posts",
    data: formData,
    contentType: false,
    processData: false,
  });

export const fetchPageCharacterPosts = (charId, numPages) =>
  $.ajax({
    method: "GET",
    url: `/api/character_posts/`,
    data: {charId, numPages}
  });


// export const likePost = (postLike) =>
//   $.ajax({
//     method: "POST",
//     url: `/api/posts/${postLike.id}/like`,
//   });

// export const unlikePost = (postLike) =>
//   $.ajax({
//     method: "POST",
//     url: `/api/posts/${postLike.id}/unlike`,
//   });
