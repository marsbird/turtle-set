import { createSlice } from '@reduxjs/toolkit';

export const tileSlice = createSlice({
  name: 'tiles',
  initialState: {
    values: [
      { _id: 0 },
      { _id: 1 },
      { _id: 2 },
      { _id: 3 },
      { _id: 4 },
      { _id: 5 },
      { _id: 6 },
      { _id: 7 },
      { _id: 8 },
      { _id: 9 },
      { _id: 10 },
      { _id: 11 },
    ],
    sets: [],
    userSelection: [],
    match: undefined,
    score: 0,
    highScore: 0,
  },
  reducers: {
    refresh: (state, action) => {
      const ids = action.payload || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      ids.forEach((i) => {
        state.values[i].number = Math.floor(Math.random() * 3);
        state.values[i].pattern = Math.floor(Math.random() * 3);
        state.values[i].color = Math.floor(Math.random() * 3);
        state.values[i].shape = Math.floor(Math.random() * 3);
      });

      state.sets = [];
      for (let i = 0; i < state.values.length; i++) {
        for (let j = i + 1; j < state.values.length; j++) {
          for (let k = j + 1; k < state.values.length; k++) {
            const isNumberSet =
              (state.values[i].number == state.values[j].number &&
                state.values[j].number == state.values[k].number) ||
              (state.values[i].number != state.values[j].number &&
                state.values[j].number != state.values[k].number &&
                state.values[k].number != state.values[i].number);
            const isPatternSet =
              (state.values[i].pattern == state.values[j].pattern &&
                state.values[j].pattern == state.values[k].pattern) ||
              (state.values[i].pattern != state.values[j].pattern &&
                state.values[j].pattern != state.values[k].pattern &&
                state.values[k].pattern != state.values[i].pattern);
            const isColorSet =
              (state.values[i].color == state.values[j].color &&
                state.values[j].color == state.values[k].color) ||
              (state.values[i].color != state.values[j].color &&
                state.values[j].color != state.values[k].color &&
                state.values[k].color != state.values[i].color);
            const isShapeSet =
              (state.values[i].shape == state.values[j].shape &&
                state.values[j].shape == state.values[k].shape) ||
              (state.values[i].shape != state.values[j].shape &&
                state.values[j].shape != state.values[k].shape &&
                state.values[k].shape != state.values[i].shape);
            if (isNumberSet && isPatternSet && isColorSet && isShapeSet) {
              state.sets.push([i, j, k].sort((a, b) => a - b));
            }
          }
        }
      }
    },
    addUserSelection: (state, action) => {
      state.userSelection.push(action.payload);
      state.userSelection.sort((a, b) => a - b);
      state.match = state.sets.some((set) => {
        return (
          set[0] == state.userSelection[0] &&
          set[1] == state.userSelection[1] &&
          set[2] == state.userSelection[2]
        );
      });
    },
    removeUserSelection: (state, action) => {
      const userSelection = state.userSelection.filter(
        (element) => element != action.payload
      );
      const match = state.sets.some((set) => {
        return (
          set[0] == userSelection[0] &&
          set[1] == userSelection[1] &&
          set[2] == userSelection[2]
        );
      });
      return { ...state, userSelection, match };
    },
    incrementScore: (state) => {
      state.score++;
    },
    clearSelection: (state) => {
      state.userSelection = [];
    },
  },
});

export const {
  refresh,
  addUserSelection,
  removeUserSelection,
  incrementScore,
  clearSelection,
} = tileSlice.actions;

export default tileSlice.reducer;
