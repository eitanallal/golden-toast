import { serverApi } from './server.api';

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  isAdmin: boolean;
}

const extendedApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users/',
    }),
  }),
});

export const { useGetUsersQuery } = extendedApi;
