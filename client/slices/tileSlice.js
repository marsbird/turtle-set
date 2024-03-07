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
    score: 0,
    highScore: 0,
  },
  reducers: {
    refresh: (state) => {
      state.values.forEach((tile, i) => {
        state.values[i].number = Math.floor(Math.random() * 3);
        state.values[i].pattern = Math.floor(Math.random() * 3);
        state.values[i].color = Math.floor(Math.random() * 3);
        state.values[i].shape = Math.floor(Math.random() * 3);
      });
      state.userSelection = [];
      state.score = 0;
    },
    getSets: (state) => {
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
    },
    removeUserSelection: (state, action) => {
      const userSelection = state.userSelection.filter(
        (element) => element != action.payload
      );
      return { ...state, userSelection };
    },
    submit: (state) => {
      // check for match
      const match = state.sets.some((set) => {
        return (
          set[0] == state.userSelection[0] &&
          set[1] == state.userSelection[1] &&
          set[2] == state.userSelection[2]
        );
      });
      // if there's a match, increment the score and replace the selected tiles
      if (match) {
        state.score++;
      } else {
        console.log('try again');
      }
      // reset the selection
      state.userSelection = [];
    },
  },
});

export const {
  refresh,
  getSets,
  addUserSelection,
  removeUserSelection,
  submit,
} = tileSlice.actions;

export default tileSlice.reducer;
