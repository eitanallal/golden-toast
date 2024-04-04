import { CriminalType } from '../../types/criminal.types';
import { UsersCriminalStatus } from '../../types/usersCriminalStatus.types';
import { serverApi } from './server.api';

const extendedApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getCriminals: builder.query<CriminalType[], void>({
      query: () => 'criminals/',
      providesTags: ['Criminals'],
    }),

    getAllUsersStatus: builder.query<UsersCriminalStatus[], void>({
      query: () => 'criminals/allusers/',
      providesTags: ['Criminals'],
    }),

    getUserStatus: builder.query<number, string>({
      query: (id: string) => `criminals/${id}`,
      providesTags: ['Criminals', 'Users'],
    }),

    addCriminal: builder.mutation<
      CriminalType,
      { userId: string; isPersonNonGrata: boolean }
    >({
      query: (body) => ({
        url: `/criminals/`,
        method: 'POST',
        body,
        formData: true,
      }),
      invalidatesTags: ['Criminals'],
    }),

    deleteCriminal: builder.mutation<boolean, { id: string }>({
      query: (body) => ({
        url: `/criminals/${body.id}`,
        method: 'DELETE',
        formData: true,
      }),
      invalidatesTags: ['Criminals'],
    }),

    editCriminal: builder.mutation<
      boolean,
      {
        id: string;
        isPersonNonGrata: boolean;
      }
    >({
      query: (body) => ({
        url: `/criminals/${body.id}`,
        method: 'PUT',
        body,
        formData: true,
      }),
      invalidatesTags: ['Criminals'],
    }),
  }),
});

export const {
  useGetCriminalsQuery,
  useGetAllUsersStatusQuery,
  useAddCriminalMutation,
  useDeleteCriminalMutation,
  useEditCriminalMutation,
  useLazyGetUserStatusQuery,
} = extendedApi;
