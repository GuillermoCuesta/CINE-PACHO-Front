import { configureStore } from '@reduxjs/toolkit';
import userLoginSlice from '../redux/slices/userLoginSlice';

export const store = configureStore({
	reducer: {
		userLogin: userLoginSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
