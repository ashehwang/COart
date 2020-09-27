export const fetchSearchResult = (filter) =>
  $.ajax({
    method: "GET",
    url: "/api/characters/search",
    data: filter,
  });