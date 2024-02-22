import { createSlice } from '@reduxjs/toolkit';

export interface RecordState {
  value: number;
  incrementAmount: number;
}

const initialState: RecordState = {
  value: 0,
  incrementAmount: 1,
};

export const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    update: (state) => {
      state.value += state.incrementAmount;
    },
  },
});

export const { update } = recordSlice.actions;

export default recordSlice.reducer;
