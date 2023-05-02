import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  randomGreeting: {
    data: {
        message: 'loading...'
    }
  },
};

export const readRandomGreeting = createAsyncThunk(
  'greetings/readRandomGreeting',
  async () => {
    const res = await fetch(`http://127.0.0.1:3000/greetings/show`);
    const greeting = await res.json();
    return greeting;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readRandomGreeting.fulfilled, (state, action) => {
      state.randomGreeting = action.payload;
    });
  },
});

export default greetingsSlice.reducer;