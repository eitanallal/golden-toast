import { LeaderBoard } from '../../types/leaderboard.types';
import { Toast } from '../../types/toast.types';
import { serverApi } from './server.api';

const extendedApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getToasts: builder.query<Toast[], void>({
      query: () => 'toasts/',
      providesTags: ['Toasts'],
    }),

    getFutureToasts: builder.query<Toast[], void>({
      query: () => 'toasts/future/',
      providesTags: ['Toasts'],
    }),

    getPassedToasts: builder.query<Toast[], void>({
      query: () => 'toasts/past/',
      providesTags: ['Toasts'],
    }),

    getLeaderBoard: builder.query<LeaderBoard[], void>({
      query: () => 'toasts/leaderboard/',
      providesTags: ['Toasts'],
    }),

    getCurrentScore: builder.query<number, void>({
      query: () => 'toasts/currentscore/',
      providesTags: ['Toasts'],
    }),

    getBestScore: builder.query<number, void>({
      query: () => 'toasts/bestscore/',
      providesTags: ['Toasts'],
    }),

    add: builder.mutation<
      Toast,
      { date: string; userId: string; hasHappened: boolean }
    >({
      query: (body) => ({
        url: `/toasts/`,
        method: 'POST',
        body,
        formData: true,
      }),
      invalidatesTags: ['Toasts'],
    }),

    editToast: builder.mutation<
      boolean,
      {
        id: string;
        date?: string;
        hasHappened?: boolean;
      }
    >({
      query: (body) => ({
        url: `/toasts/${body.id}`,
        method: 'PUT',
        body,
        formData: true,
      }),
      invalidatesTags: ['Toasts', 'Users'],
    }),
  }),
});

export const {
  useGetToastsQuery,
  useGetFutureToastsQuery,
  useGetPassedToastsQuery,
  useGetLeaderBoardQuery,
  useGetCurrentScoreQuery,
  useGetBestScoreQuery,
  useAddMutation,
  useEditToastMutation,
} = extendedApi;
