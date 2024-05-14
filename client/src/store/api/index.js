import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: ({ sortSettings, page }) => ({
        url: `events`,
        params: { ...sortSettings, page },
      }),
    }),

    getEvent: builder.query({ query: ({ eventId, searchSettings }) => ({
      url: `/events/${eventId}`,
      params: { ...searchSettings },
    })}),

    createAndAddParticipantToEvent: builder.mutation({
      query: ({ eventId, data }) => ({
        url: `events/${eventId}/participants`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetEventsQuery,
  useGetEventQuery,
  useCreateAndAddParticipantToEventMutation,
} = eventsApi;
