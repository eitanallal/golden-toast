import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
  id: number;
  name: string;
  password: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addPerson: (
      state,
      action: PayloadAction<{ name: string; password: string }>
    ) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
        password: action.payload.password,
      });
      console.log(
        `Added a person: ${action.payload.name}: ${action.payload.password} as password`
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

export const { addPerson, signUpUser } = PersonSlice.actions;

export default PersonSlice.reducer;
