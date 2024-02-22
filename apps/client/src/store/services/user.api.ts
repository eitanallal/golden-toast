import { User } from '../../types/user.types';
import { serverApi } from './server.api';

const extendedApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users/',
    }),
  }),
});

export const { useGetUsersQuery } = extendedApi;
