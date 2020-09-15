export const fetchSearchedUsers = (filter) =>
  $.ajax({
    method: "GET",
    url: "/api/users/search",
    data: filter,
  });