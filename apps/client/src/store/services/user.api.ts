import { User } from '../../types/user.types';
import { serverApi } from './server.api';

const extendedApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users/',
    }),

    getUserData: builder.query<User, void>({
      query: (userId) => `users/username/${userId}`,
    }),

    login: builder.mutation<User, { username: string; password: string }>({
      query: (body) => ({
        url: `/users/login/`,
        method: 'POST',
        body,
        formData: true,
      }),
    }),

    signUp: builder.mutation<
      User,
      {
        username: string;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
      }
    >({
      query: (body) => ({
        url: `/users/`,
        method: 'POST',
        body,
        formData: true,
      }),
    }),

    edit: builder.mutation<
      boolean,
      {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
      }
    >({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PUT',
        body,
        formData: true,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserDataQuery,
  useLoginMutation,
  useSignUpMutation,
  useEditMutation,
} = extendedApi;
