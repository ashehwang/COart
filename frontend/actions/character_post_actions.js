import * as CharacterPostApiUtil from "../util/character_post_api_util"

export const RECEIVE_ALL_CHARACTER_POSTS = "RECEIVE_ALL_CHARACTER_POSTS";
export const RECEIVE_CHARACTER_POST = "RECEIVE_CHARACTER_POST";
export const REMOVE_CHARACTER_POST = "REMOVE_CHARACTER_POST";
export const RECEIVE_CHARACTER_POST_ERROR = "RECEIVE_CHARACTER_POST_ERROR";
export const RECEIVE_PUBLIC_CHARACTER_POSTS = "RECEIVE_PUBLIC_CHARACTER_POSTS";

const receiveAllCharacterPosts = (payload) => ({
  type: RECEIVE_ALL_CHARACTER_POSTS,
  payload: payload,
}); //USE THIS FOR INDIVIDUAL CHARACTER POST PAGE

const receivePublicCharacterPosts = (payload) => ({
  type: RECEIVE_PUBLIC_CHARACTER_POSTS,
  payload: payload,
}); //USE THIS FOR MAIN CHARACTER POST PAGE

const receiveCharacterPost = (characterPost) => ({
  type: RECEIVE_CHARACTER_POST,
  characterPost,
});

const removeCharacterPost = (characterPostId) => ({
  type: REMOVE_CHARACTER_POST,
  characterPostId,
});

// export const fetchCharacterPosts = () => (dispatch) =>
//   CharacterPostApiUtil.fetchCharacterPosts().then((payload) =>
//     dispatch(receiveAllCharacterPosts(payload))
//   );

export const fetchCharacterPost = (characterPostId) => (dispatch) =>
  CharacterPostApiUtil.fetchCharacterPost(characterPostId).then((characterPost) => dispatch(receiveCharacterPost(characterPost)));

// export const createCharacterPost = (characterPost) => (dispatch) =>
//   CharacterPostApiUtil.createCharacterPost(characterPost).then((characterPost) => dispatch(receiveCharacterPost(characterPost)));

export const updateCharacterPost = (formData, id) => (dispatch) =>
  CharacterPostApiUtil.updateCharacterPost(formData, id).then((updatedCharacterPost) =>
    dispatch(receiveCharacterPost(updatedCharacterPost))
  );

export const deleteCharacterPost = (characterPostId) => (dispatch) =>
  CharacterPostApiUtil.deleteCharacterPost(characterPostId).then(() => dispatch(removeCharacterPost(characterPostId)));

// export const fetchUserCharacterPosts = (userId) => (dispatch) =>
//   CharacterPostApiUtil.fetchUserCharacterPosts(userId).then((characterPosts) =>
//     dispatch(receiveAllCharacterPosts(characterPosts))
//   );

export const fetchRelatedCharacterPosts = (characterId) => dispatch => (
  CharacterPostApiUtil.fetchRelatedCharacterPosts(characterId)
    .then(payload => dispatch(receiveAllCharacterPosts(payload)))
);

export const fetchPublicCharacterPosts = () => (dispatch) =>
  CharacterPostApiUtil.fetchPublicCharacterPosts().then((payload) =>
    dispatch(receivePublicCharacterPosts(payload))
  );


export const createCharacterPost = (formData) => (dispatch) =>
  CharacterPostApiUtil.createCharacterPost(formData)
    .then((characterPost) => dispatch(receiveCharacterPost(characterPost))
  );

// export const likePost = (postLike) => (dispatch) =>
//   CharacterPostApiUtil.likePost(postLike).then((post) => dispatch(receivePost(post)));

// export const unlikePost = (postLike) => (dispatch) =>
//   CharacterPostApiUtil.unlikePost(postLike).then((post) => dispatch(receivePost(post)));
