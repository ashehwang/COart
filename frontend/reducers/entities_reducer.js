import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import searchReducer from "./search_reducer";
import friendRequestsReducer from "./friend_requests_reducer";
import friendsReducer from "./friends_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  search: searchReducer,
  friendRequests: friendRequestsReducer,
  friends: friendsReducer,
});

export default entitiesReducer;
