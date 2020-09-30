import * as MembershipApiUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP_REQUEST = "RECEIVE_MEMBERSHIP_REQUEST";
export const REMOVE_MEMBERSHIP_REQUEST = "REMOVE_MEMBERSHIP_REQUEST";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";


const receiveMembershipRequest = (payload) => ({
  type: RECEIVE_MEMBERSHIP_REQUEST,
  payload,
});

const removeMembershipRequest = (payload) => ({
  type: REMOVE_MEMBERSHIP_REQUEST,
  payload,
});

const receiveMembership = (membership) => ({
  type: RECEIVE_MEMBERSHIP,
  membership,
});

const removeMembership = (membership) => ({
  type: REMOVE_MEMBERSHIP,
  membership,
});

export const createMembershipRequest = (membershipRequest) => (dispatch) =>
  MembershipApiUtil.createMembershipRequest(membershipRequest).then((membershipRequest) =>
    dispatch(receiveMembershipRequest(membershipRequest))
  );

export const deleteMembershipRequest = (membershipRequestId) => (dispatch) =>
  MembershipApiUtil.deleteMembershipRequest(membershipRequestId).then((payload) =>
    dispatch(removeMembershipRequest(payload))
  );

// export const createFriend = (membership) => (dispatch) =>
//   MembershipApiUtil.createMembership(membership).then((membership) =>
//     dispatch(receiveMembership(membership))
//   );

// export const deleteMembership = (membershipId) => (dispatch) =>
//   MembershipApiUtil.deleteMembership(membershipId).then((membership) =>
//     dispatch(removeMembership(membership))
//   );

// export const fetchWorldMembershipRequest = worldId => dispatch => (
//     MembershipApiUtil.fetchWorldMembershipRequest(worldId).then(payload => 
//         dispatch(receiveAllMembership(payload)))
// )