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

export const createPost = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/posts",
    data: formData,
    contentType: false,
    processData: false,
  });

export const fetchPagePosts = (userId, numPages) => (
  $.ajax({
    method: "GET",
    url: "/api/posts",
    data: { userId, numPages }
  })
);