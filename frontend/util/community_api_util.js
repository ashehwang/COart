export const fetchAllOpenCommunities = () =>
  $.ajax({
    method: "GET",
    url: "/api/communities",
  });

// export const fetchCommunity = (communityId) =>
//   $.ajax({
//     method: "GET",
//     url: `/api/communities/${communityId}`,
//   });

export const updateCommunity = (formData, communityId) =>
  $.ajax({
    method: "PATCH",
    url: `/api/communities/${communityId}`,
    data: formData,
    contentType: false,
    processData: false,
  });

export const deleteCommunity = (communityId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/communities/${communityId}`,
  });

export const createCommunity = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/communities",
    data: formData,
    contentType: false,
    processData: false,
  });

export const fetchCommunityByUrl = worldUrl =>
  $.ajax({
    method: "GET",
    url: "/api/communities",
    data: { worldUrl }
  });

export const followCommunity = (follow) =>
  $.ajax({
    method: "POST",
    url: `/api/communities/${follow.id}/follow`,
  });

export const unfollowCommunity = (follow) =>
  $.ajax({
    method: "POST",
    url: `/api/communities/${follow.id}/unfollow`,
  });