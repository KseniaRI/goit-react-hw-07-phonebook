// import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f50a13ac59075124c9e4c7.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: ({name, phone}) => ({
        url: '/contacts',
        method: 'POST',
        body: {name, phone},
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;

// export const itemsSlice = createSlice({
//     name: 'items',
//     initialState: [],
//     reducers: {
//         saveContact: {
//             reducer: (state, action) => {
//                 state.push(action.payload)
//             },
//             prepare: ({ name, number }) => {
//                 const id = nanoid();
//                 return { payload: { name, number, id } }
//             },
//         },
//         deleteContact(state, action) {
//             return state.filter(item => item.id !== action.payload);
//         },
        
//     }
// })

// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState: '',
//     reducers: {
//         changeFilter(_, action) {
//             return action.payload;
//         }
//     }
// });

// export const phonebookReducer = combineReducers({
//     items: itemsSlice.reducer,
//     filter: filterSlice.reducer,
// })

