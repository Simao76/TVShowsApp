// src/redux/tvShowsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TVShow } from '../types';

interface TVShowsState {
  shows: TVShow[];
  loading: boolean;
  error: string | null;
}

const initialState: TVShowsState = {
  shows: [],
  loading: false,
  error: null,
};

export const fetchTVShows = createAsyncThunk('tvShows/fetchTVShows', async () => {
  const response = await axios.get('https://api.tvmaze.com/shows');
  return response.data as TVShow[];
});

const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVShows.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTVShows.fulfilled, (state, action) => {
        state.loading = false;
        state.shows = action.payload;
      })
      .addCase(fetchTVShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch TV shows';
      });
  },
});

export default tvShowsSlice.reducer;
