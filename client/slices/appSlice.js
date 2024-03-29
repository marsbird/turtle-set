import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    gameStarted: false,
  },
  reducers: {
    startGame: (state) => {
      const gameStarted = true;
      return { ...state, gameStarted };
    },
  },
});

export const { startGame } = appSlice.actions;

export default appSlice.reducer;
