import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

// Export actions
export const { setName, setEmail } = userSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
