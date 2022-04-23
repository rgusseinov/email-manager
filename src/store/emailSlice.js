// eslint-disable-next-line prettier/prettier
import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    isEmailInQueue: false,
    emails: []
  },
  reducers: {
    addEmail(state, action) {
      // console.log(`payload:`, action.payload.subject);
      state.isEmailInQueue = true;
      state.emails.push({
        id: new Date().toDateString(),
        subject: action.payload.subject,
        sendByName: action.payload.sendByName,
        sendByEmail: action.payload.sendByEmail,
        sendToName: action.payload.sendToName,
        sendToEmail: action.payload.sendToEmail,
        message: action.payload.message
      });
    },
    clearQueue(state) {
      if (state.isEmailInQueue) state.isEmailInQueue = false;
    }
  }
});

export const { addEmail, clearQueue } = emailSlice.actions;

export default emailSlice.reducer;
