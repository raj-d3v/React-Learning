// 1. Import createSlice from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// 2. Define initialState with `user` and `isAuthenticated`
const initialState = {
  user: null,
  isAuthenticated: false,
};

// 3. Call createSlice and assign it to a variable (e.g., authSlice)
//    Inside createSlice:
//    - name: 'auth'
//    - initialState: your state from step 2
//    - reducers: define loginUser and logoutUser here

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// 4. Export actions (loginUser, logoutUser)
export const { loginUser, logoutUser } = authSlice.actions;

// 5. Export reducer as default
export default authSlice.reducer;
