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
      const match = undefined;
      const userSelection = [];
      const values = JSON.parse(JSON.stringify(state.values));
      const sets = [];

      ids.forEach((i) => {
        const newCard = {};
        newCard._id = i;
        newCard.number = Math.floor(Math.random() * 3);
        newCard.pattern = Math.floor(Math.random() * 3);
        newCard.color = Math.floor(Math.random() * 3);
        newCard.shape = Math.floor(Math.random() * 3);
        values[i] = newCard;
      });

      for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
          for (let k = j + 1; k < values.length; k++) {
            const isNumberSet =
              (values[i].number == values[j].number &&
                values[j].number == values[k].number) ||
              (values[i].number != values[j].number &&
                values[j].number != values[k].number &&
                values[k].number != values[i].number);
            const isPatternSet =
              (values[i].pattern == values[j].pattern &&
                values[j].pattern == values[k].pattern) ||
              (values[i].pattern != values[j].pattern &&
                values[j].pattern != values[k].pattern &&
                values[k].pattern != values[i].pattern);
            const isColorSet =
              (values[i].color == values[j].color &&
                values[j].color == values[k].color) ||
              (values[i].color != values[j].color &&
                values[j].color != values[k].color &&
                values[k].color != values[i].color);
            const isShapeSet =
              (values[i].shape == values[j].shape &&
                values[j].shape == values[k].shape) ||
              (values[i].shape != values[j].shape &&
                values[j].shape != values[k].shape &&
                values[k].shape != values[i].shape);
            if (isNumberSet && isPatternSet && isColorSet && isShapeSet) {
              sets.push([i, j, k].sort((a, b) => a - b));
            }
          }
        }
      }
      return { ...state, match, userSelection, values, sets };
    },
    addUserSelection: (state, action) => {
      const userSelection = JSON.parse(JSON.stringify(state.userSelection));
      userSelection.push(action.payload);
      userSelection.sort((a, b) => a - b);

      const match = state.sets.some((set) => {
        return (
          set[0] == userSelection[0] &&
          set[1] == userSelection[1] &&
          set[2] == userSelection[2]
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
