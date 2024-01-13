// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, setLoading, setError } = counterSlice.actions;

// Create a store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;