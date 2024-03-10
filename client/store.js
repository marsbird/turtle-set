import { configureStore } from '@reduxjs/toolkit';
import tileReducer from './slices/tileSlice.js';
import appReducer from './slices/appSlice.js';

export default configureStore({
  reducer: {
    tiles: tileReducer,
    app: appReducer,
  },
});
