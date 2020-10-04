import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import charactersReducer from "./characters_reducer";
import characterPostsReducer from './character_posts_reducer';
import searchReducer from "./search_reducer";
import friendRequestsReducer from "./friend_requests_reducer";
import friendsReducer from "./friends_reducer";
import boardPostsReducer from './board_posts_reducer';
import boardCommentsReducer from './board_comments_reducer';
import communitiesReducer from './communities_reducer';
import membershipRequestsReducer from './membership_requests_reducer';
import userCommentsReducer from './user_comments_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  userComments: userCommentsReducer,
  search: searchReducer,
  friendRequests: friendRequestsReducer,
  friends: friendsReducer,
  characters: charactersReducer,
  characterPosts: characterPostsReducer,
  comments: commentsReducer,
  boardPosts: boardPostsReducer,
  boardComments: boardCommentsReducer,
  communities: communitiesReducer,
  membershipRequests: membershipRequestsReducer,
  messages: messagesReducer
});

export default entitiesReducer;