// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tvShowsReducer from './tvShowsSlice';
import tvShowDetailsReducer from './tvShowDetailsSlice';
import episodeDetailsReducer from './episodeDetailsSlice';

export const store = configureStore({
  reducer: {
    tvShows: tvShowsReducer,
    tvShowDetails: tvShowDetailsReducer,
    episodeDetails: episodeDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
