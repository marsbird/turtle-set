import { createSlice } from '@reduxjs/toolkit';

export const tileSlice = createSlice({
  name: 'tiles',
  initialState: {
    values: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    sets: [],
    userSelection: [],
  },
  reducers: {
    refresh: (state) => {
      state.values.forEach((tile, i) => {
        state.values[i] = {
          _id: i,
          number: Math.floor(Math.random() * 3),
          pattern: Math.floor(Math.random() * 3),
          color: Math.floor(Math.random() * 3),
          shape: Math.floor(Math.random() * 3),
        };
      });
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
  },
});

export const { refresh, getSets, addUserSelection } = tileSlice.actions;

export default tileSlice.reducer;
