export const fetchPosts = () =>
  $.ajax({
    method: "GET",
    url: "/api/posts",
  });

export const fetchPost = (postId) =>
  $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`,
  });

export const createPost = (post) =>
  $.ajax({
    method: "POST",
    url: "/api/posts",
    data: { post },
    contentType: false,
    processData: false,
  });

export const updatePost = (formData, id) =>
  $.ajax({
    method: "PATCH",
    url: `/api/posts/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const deletePost = (postId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`,
  });

export const fetchUserPosts = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/posts`,
    data: { userId },
  });

export const createPhotoPost = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/posts",
    data: formData,
    contentType: false,
    processData: false,
  });

export const likePost = (postLike) =>
  $.ajax({
    method: "POST",
    url: `/api/posts/${postLike.id}/like`,
  });

export const unlikePost = (postLike) =>
  $.ajax({
    method: "POST",
    url: `/api/posts/${postLike.id}/unlike`,
  });
