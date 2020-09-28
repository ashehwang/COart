import * as CommunityApiUtil from '../util/community_api_util';

export const RECEIVE_ALL_OPEN_COMMUNITIES = "RECEIVE_ALL_OPEN_COMMUNITIES";
export const RECEIVE_COMMUNITY = "RECEIVE_COMMUNITY";
export const REMOVE_COMMUNITY = "REMOVE_COMMUNITY";
export const RECEIVE_COMMUNITY_ERROR = "RECEIVE_COMMUNITY_ERROR";

const receiveAllOpenCommunities = (payload) => ({
  type: RECEIVE_ALL_OPEN_COMMUNITIES,
  payload: payload,
});

const receiveCommunity = (post) => ({
  type: RECEIVE_COMMUNITY,
  post,
});

const removeCommunity = (communityId) => ({
  type: REMOVE_COMMUNITY,
  communityId,
});

export const fetchAllOpenCommunities = () => (dispatch) =>
  CommunityApiUtil.fetchAllOpenCommunities().then((payload) =>
    dispatch(receiveAllOpenCommunities(payload))
  );

export const fetchCommunity = (communityId) => (dispatch) =>
  CommunityApiUtil.fetchCommunity(communityId).then((community) => dispatch(receiveCommunity(community)));

export const updateCommunity = (formData, communityId) => (dispatch) =>
  CommunityApiUtil.updateCommunity(formData, communityId).then((updatedCommunity) =>
    dispatch(receiveCommunity(updatedCommunity))
  );

export const deleteCommunity = (communityId) => (dispatch) =>
  CommunityApiUtil.deleteCommunity(communityId).then(() => dispatch(removeCommunity(communityId)));

export const createCommunity = (formData) => (dispatch) =>
  CommunityApiUtil.createCommunity(formData).then((community) =>
    dispatch(receiveCommunity(community))
  );