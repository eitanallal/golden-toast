import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{ name: string; password: string }>
    ) => {
      state.users.push({
        id: state.users.length,
        name: action.payload.name,
        password: action.payload.password,
      });
      console.log(
        `Added a user: ${action.payload.name}: ${action.payload.password} as password`
      );
    },

    signUpUser: (
      state,
      action: PayloadAction<{
        username: string;
        firstname: string;
        lastname: string;
        password: string;
        isAdmin: boolean;
      }>
    ) => {
      console.log(
        `signed up a new user:
        username: ${action.payload.username}
        firstname: ${action.payload.firstname}
        lastname: ${action.payload.lastname}
        password: ${action.payload.password}
        is admin: ${action.payload.isAdmin}`
      );
    },
  },
});

export const { addUser, signUpUser } = UserSlice.actions;

export default UserSlice.reducer;
