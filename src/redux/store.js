import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';

import storageModule from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const storage = storageModule.default ?? storageModule;

const contactsPersistConfig = {
  key: 'contacts',
  storage: storage,
  whitelist: ['items'],
};
console.log(storage);
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),

    filters: filtersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
