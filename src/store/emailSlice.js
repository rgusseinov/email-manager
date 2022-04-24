import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    isEmailInQueue: false,
    emails: []
  },
  reducers: {
    addEmail(state, action) {
      state.isEmailInQueue = true;
      state.emails.push({
        id: new Date().toDateString(),
        subject: action.payload.subject,
        sendByName: action.payload.sendByName,
        sendByEmail: action.payload.sendByEmail,
        sendToName: action.payload.sendToName,
        sendToEmail: action.payload.sendToEmail,
        sendDate: new Date().toDateString(),
        message: action.payload.message,
        status: 1
      });
    },
    clearQueue(state) {
      if (state.isEmailInQueue) state.isEmailInQueue = false;
    },
    updateEmailStatus(state, action) {
      const emailIndex = state.emails.findIndex((email) => email.status == 1);
      if (emailIndex != -1) state.emails[emailIndex].status = action.payload;
    }
  }
});

export const { addEmail, clearQueue, updateEmailStatus } = emailSlice.actions;

export default emailSlice.reducer;
