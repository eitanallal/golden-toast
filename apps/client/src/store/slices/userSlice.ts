import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  isAdmin: boolean;
}

const initialState: User = {
  id: '',
  username: '',
  lastName: '',
  firstName: '',
  password: '',
  isAdmin: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpUser: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
      }>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.isAdmin = action.payload.isAdmin;
    },

    loginUser: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
      }>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const { loginUser, signUpUser } = UserSlice.actions;

export default UserSlice.reducer;
