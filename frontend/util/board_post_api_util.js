export const fetchAllBoardPosts = () =>
  $.ajax({
    method: "GET",
    url: "/api/board_posts",
  });

export const fetchBoardPost = (boardPostId) =>
  $.ajax({
    method: "GET",
    url: `/api/board_posts/${boardPostId}`,
  });

export const updateBoardPost = (formData, id) =>
  $.ajax({
    method: "PATCH",
    url: `/api/board_posts/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const deleteBoardPost = (boardPostId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/board_posts/${boardPostId}`,
  });

export const createBoardPost = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/board_posts",
    data: formData,
    contentType: false,
    processData: false,
  });