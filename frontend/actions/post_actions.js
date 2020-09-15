import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERROR = "RECEIVE_POST_ERROR";

const receiveAllPosts = (payload) => ({
  type: RECEIVE_ALL_POSTS,
  payload: payload,
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId,
});

export const fetchPosts = () => (dispatch) =>
  PostApiUtil.fetchPosts().then((payload) =>
    dispatch(receiveAllPosts(payload))
  );

export const fetchPost = (postId) => (dispatch) =>
  PostApiUtil.fetchPost(postId).then((post) => dispatch(receivePost(post)));

export const createPost = (post) => (dispatch) =>
  PostApiUtil.createPost(post).then((post) => dispatch(receivePost(post)));

export const updatePost = (formData, id) => (dispatch) =>
  PostApiUtil.updatePost(formData, id).then((updatedPost) =>
    dispatch(receivePost(updatedPost))
  );

export const deletePost = (postId) => (dispatch) =>
  PostApiUtil.deletePost(postId).then(() => dispatch(removePost(postId)));

export const fetchUserPosts = (userId) => (dispatch) =>
  PostApiUtil.fetchUserPosts(userId).then((posts) =>
    dispatch(receiveAllPosts(posts))
  );

export const createPhotoPost = (formData) => (dispatch) =>
  PostApiUtil.createPhotoPost(formData).then((post) =>
    dispatch(receivePost(post))
  );

export const likePost = (postLike) => (dispatch) =>
  PostApiUtil.likePost(postLike).then((post) => dispatch(receivePost(post)));

export const unlikePost = (postLike) => (dispatch) =>
  PostApiUtil.unlikePost(postLike).then((post) => dispatch(receivePost(post)));
