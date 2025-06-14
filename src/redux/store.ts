// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import todosReducer from '../redux/todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  // Add other reducers here
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['todos'], // Specify which reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
