import { createSlice } from '@reduxjs/toolkit';

export const tileSlice = createSlice({
  name: 'tiles',
  initialState: {
    values: [
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
      { number: 0, pattern: 0, color: 0, shape: 0 },
    ],
  },
  reducers: {
    refresh: (state) => {
      state.values.forEach((tile, i) => {
        state.values[i] = {
          number: Math.floor(Math.random() * 3),
          pattern: Math.floor(Math.random() * 3),
          color: Math.floor(Math.random() * 3),
          shape: Math.floor(Math.random() * 3),
        };
      });
    },
  },
});

export const { refresh } = tileSlice.actions;

export default tileSlice.reducer;
