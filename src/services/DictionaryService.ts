import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const dictionaryAPI = createApi({
  reducerPath: 'dictionaryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  }),
  endpoints: (build) => ({
    fetchWord: build.query({
      query: (word) => ({
        url: `/${word}`,
      }),
    }),
  }),
});
