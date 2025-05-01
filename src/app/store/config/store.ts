import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'shared/api';
import { messagesReducer } from 'entities/message';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
