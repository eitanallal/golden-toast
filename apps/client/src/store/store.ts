import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from './features/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// ...

export const store = configureStore({
  reducer: { user: UserSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
