// src/redux/tvShowDetailsSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TVShowDetails } from '../types';

interface TVShowDetailsState {
  showDetails: TVShowDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: TVShowDetailsState = {
  showDetails: null,
  loading: false,
  error: null,
};

export const fetchTVShowDetails = createAsyncThunk('tvShowDetails/fetchTVShowDetails', async (id: number) => {
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}?embed=episodes`);
  return response.data as TVShowDetails;
});

const tvShowDetailsSlice = createSlice({
  name: 'tvShowDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVShowDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTVShowDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.showDetails = action.payload;
      })
      .addCase(fetchTVShowDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch TV show details';
      });
  },
});

export default tvShowDetailsSlice.reducer;
