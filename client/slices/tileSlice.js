import { createSlice } from '@reduxjs/toolkit';

export const tileSlice = createSlice({
  name: 'tiles',
  initialState: {
    values: [],
    sets: [],
    userSelection: [],
    match: undefined,
    score: 0,
    highScore: 0,
  },
  reducers: {
    refresh: (state, action) => {
      const ids = action.payload || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      state.match = undefined;

      state.userSelection = [];

      ids.forEach((i) => {
        const newCard = {};
        newCard._id = i;
        newCard.number = Math.floor(Math.random() * 3);
        newCard.pattern = Math.floor(Math.random() * 3);
        newCard.color = Math.floor(Math.random() * 3);
        newCard.shape = Math.floor(Math.random() * 3);

        state.values[i] = newCard;
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
      const userSelection = structuredClone(state.userSelection);
      userSelection.push(action.payload);
      userSelection.sort((a, b) => a - b);

      const match = state.sets.some((set) => {
        return (
          set[0] == state.userSelection[0] &&
          set[1] == state.userSelection[1] &&
          set[2] == state.userSelection[2]
        );
      });

      return { ...state, userSelection, match };
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
      const score = state.score + 1;

      return { ...state, score };
    },
    clearSelection: (state) => {
      const userSelection = [];

      return { ...state, userSelection };
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
