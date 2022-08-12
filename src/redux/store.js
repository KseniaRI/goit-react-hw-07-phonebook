import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterSlice } from "./phonebookSlice";

import { contactsApi } from "./phonebookSlice";

const middleware = [...getDefaultMiddleware(), contactsApi.middleware, logger];

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);




