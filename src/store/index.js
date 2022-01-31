import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './emailSlice';

export default configureStore({
  reducer: {
    emails: emailReducer
  }
});
