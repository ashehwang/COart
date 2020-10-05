import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_ALL_USER_POSTS = "RECEIVE_USER_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERROR = "RECEIVE_POST_ERROR";
export const RECEIVE_PAGE_POSTS = "RECEIVE_PAGE_POSTS";

const receiveAllUserPosts = (payload) => ({
  type: RECEIVE_ALL_USER_POSTS,
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

const receivePagePosts = (payload) => ({
  type: RECEIVE_PAGE_POSTS,
  payload,
});


export const updatePost = (formData, id) => (dispatch) =>
  PostApiUtil.updatePost(formData, id).then((updatedPost) =>
    dispatch(receivePost(updatedPost))
  );

export const deletePost = (postId) => (dispatch) =>
  PostApiUtil.deletePost(postId).then(() => dispatch(removePost(postId)));

export const fetchUserPosts = (userId) => (dispatch) =>
  PostApiUtil.fetchUserPosts(userId).then((posts) =>
    dispatch(receiveAllUserPosts(posts))
  );

export const createPost = (formData) => (dispatch) =>
  PostApiUtil.createPost(formData).then((post) =>
    dispatch(receivePost(post))
  );

export const fetchPagePosts = (userId, numPages) => (dispatch) =>
  PostApiUtil.fetchPagePosts(userId, numPages).then((payload) =>
    dispatch(receivePagePosts(payload))
  );
