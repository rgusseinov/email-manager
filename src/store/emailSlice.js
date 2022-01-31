// eslint-disable-next-line prettier/prettier
import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: []
  },
  reducers: {
    addEmail(state, action) {
      state.emails.push({
        id: new Date().toDateString(),
        sendByName: action.payload
      });
    }
  }
});

export const { addEmail } = emailSlice.actions;

export default emailSlice.reducer;
