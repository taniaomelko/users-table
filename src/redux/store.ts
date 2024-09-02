import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './reducers';

export const store = configureStore({
  reducer: combineReducers({
    users: usersReducer,
  })
});

export type RootState = ReturnType<typeof store.getState>;
