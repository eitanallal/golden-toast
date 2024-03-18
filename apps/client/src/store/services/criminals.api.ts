import { CriminalType } from '../../types/criminal.types';
import { serverApi } from './server.api';

const extendedApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getCriminals: builder.query<CriminalType[], void>({
      query: () => 'criminals/',
    }),
  }),
});

export const { useGetCriminalsQuery } = extendedApi;
