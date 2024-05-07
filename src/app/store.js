import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postSlice';
import usersReducer from '../features/users/userSlice';
import navbarDataReducer from '../features/navbar/navDataSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    navdata: navbarDataReducer,
  },
});
