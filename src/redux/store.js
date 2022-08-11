import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { setupListeners } from '@reduxjs/toolkit/query';

import { contactsApi } from "./phonebookSlice";

const middleware = [...getDefaultMiddleware(), contactsApi.middleware, logger];

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
    },

    // preloadedState: {
    //     phonebook: {
    //         items:[ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //                 { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //                 { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //                 { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //             ],
    //     }
    // },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);




