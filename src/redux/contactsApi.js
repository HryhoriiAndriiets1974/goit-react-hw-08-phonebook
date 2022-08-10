import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://62e7ce640e5d74566afc5699.mockapi.io/',
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } return headers;
    },
  }),
  endpoints: builder => ({
    getContactsApi: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    delContact: builder.mutation({
      query: contactsId => ({
        url: `/contacts/${contactsId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
  }),
    createContact: builder.mutation({
      query: value => ({
        url: '/contacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags:  ['Contact'],
  }),
  }),
});

export const {
  useGetContactsApiQuery,
  useDelContactMutation,
  useCreateContactMutation,
} = contactsApi;
