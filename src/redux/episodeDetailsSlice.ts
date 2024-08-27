// src/redux/episodeDetailsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EpisodeDetails } from '../types';

interface EpisodeDetailsState {
  episode: EpisodeDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: EpisodeDetailsState = {
  episode: null,
  loading: false,
  error: null,
};

export const fetchEpisodeDetails = createAsyncThunk('episodeDetails/fetchEpisodeDetails', async (id: number) => {
  const response = await axios.get(`https://api.tvmaze.com/episodes/${id}`);
  return response.data as EpisodeDetails;
});

const episodeDetailsSlice = createSlice({
  name: 'episodeDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEpisodeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.episode = action.payload;
      })
      .addCase(fetchEpisodeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch episode details';
      });
  },
});

export default episodeDetailsSlice.reducer;
