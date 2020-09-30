export const fetchWorldMembershipRequest = (worldId) =>
  $.ajax({
    method: "GET",
    url: "/api/membership_requests",
    data: { worldId },
  });

export const createMembershipRequest = (membership_request) =>
  $.ajax({
    method: "POST",
    url: "/api/membership_requests",
    data: { membership_request },
  });

export const deleteMembershipRequest = (membershipRequestId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/membership_requests/${membershipRequestId}`,
  });

export const createMembership = membership => (
  $.ajax({
    method: "POST",
    url: "/api/memberships",
    data: { membership }
  })
);

export const deleteMembership = membershipId => (
  $.ajax({
    method: "DELETE",
    url: `/api/memberships/${membershipId}`
  })
);