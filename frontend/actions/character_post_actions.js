import * as CharacterPostApiUtil from "../util/character_post_api_util"

export const RECEIVE_ALL_CHARACTER_POSTS = "RECEIVE_ALL_CHARACTER_POSTS";
export const RECEIVE_CHARACTER_POST = "RECEIVE_CHARACTER_POST";
export const REMOVE_CHARACTER_POST = "REMOVE_CHARACTER_POST";
export const RECEIVE_CHARACTER_POST_ERROR = "RECEIVE_CHARACTER_POST_ERROR";
export const RECEIVE_PUBLIC_CHARACTER_POSTS = "RECEIVE_PUBLIC_CHARACTER_POSTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_PAGE_CHARACTER_POSTS = "RECEIVE_PAGE_CHARACTER_POSTS";
export const RECEIVE_FOLLOWING_CHARACTER_POSTS = "RECEIVE_FOLLOWING_CHARACTER_POSTS";

const receivePageCharacterPosts = payload => ({
  type: RECEIVE_PAGE_CHARACTER_POSTS,
  payload
}); //USER THIS FOR RECEIVING CERTAIN NUM PAGES A TIME

const receiveAllCharacterPosts = (payload) => ({
  type: RECEIVE_ALL_CHARACTER_POSTS,
  payload: payload,
}); //USE THIS FOR INDIVIDUAL CHARACTER POST PAGE

const receivePublicCharacterPosts = (payload) => ({
  type: RECEIVE_PUBLIC_CHARACTER_POSTS,
  payload: payload,
}); //USE THIS FOR MAIN CHARACTER POST PAGE

const receiveFollowingCharacterPosts = (payload) => ({
  type: RECEIVE_FOLLOWING_CHARACTER_POSTS,
  payload: payload,
}); //USE THIS FOR FEED PAGE

const receiveCharacterPost = (characterPost) => ({
  type: RECEIVE_CHARACTER_POST,
  characterPost,
});

const removeCharacterPost = (characterPostId) => ({
  type: REMOVE_CHARACTER_POST,
  characterPostId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const fetchCharacterPost = (characterPostId) => (dispatch) =>
  CharacterPostApiUtil.fetchCharacterPost(characterPostId).then((characterPost) => dispatch(receiveCharacterPost(characterPost)));

export const updateCharacterPost = (formData, id) => (dispatch) =>
  CharacterPostApiUtil.updateCharacterPost(formData, id).then((updatedCharacterPost) =>
    dispatch(receiveCharacterPost(updatedCharacterPost))
  );

export const deleteCharacterPost = (characterPostId) => (dispatch) =>
  CharacterPostApiUtil.deleteCharacterPost(characterPostId).then(() => dispatch(removeCharacterPost(characterPostId)));

export const fetchRelatedCharacterPosts = (characterId) => dispatch => (
  CharacterPostApiUtil.fetchRelatedCharacterPosts(characterId)
    .then(payload => dispatch(receiveAllCharacterPosts(payload)))
);

export const fetchPublicCharacterPosts = () => (dispatch) =>
  CharacterPostApiUtil.fetchPublicCharacterPosts().then((payload) =>
    dispatch(receivePublicCharacterPosts(payload))
  );

export const fetchFollowingCharacterPosts = (userId, page) => (dispatch) =>
  CharacterPostApiUtil.fetchFollowingCharacterPosts(userId, page).then((payload) =>
    dispatch(receiveFollowingCharacterPosts(payload))
  );

export const createCharacterPost = (formData) => (dispatch) =>
  CharacterPostApiUtil.createCharacterPost(formData)
    .then((characterPost) => dispatch(receiveCharacterPost(characterPost)),
      err => dispatch(receiveErrors(err.responseJSON)));
    // .catch((err) => dispatch(receiveErrors(err.response.data)));

export const fetchPageCharacterPosts = (charId, numPages) => dispatch => (
  CharacterPostApiUtil.fetchPageCharacterPosts(charId, numPages)
    .then(payload => dispatch(receivePageCharacterPosts(payload)))
)
