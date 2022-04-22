import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {INote} from "../models/INote";
import {ICounter} from "../models/ICounter";

export const notesAPI = createApi({
    reducerPath: 'notesAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ["Note","Counter"],
    endpoints: (build) => ({
        fetchAllNotes: build.query<INote[],string>({
            query: () => ({
                url: '/notes/',
            }),
            providesTags: result => ["Note"]
        }),
        creatNote: build.mutation<INote,INote>({
            query: (note) => ({
                url: '/notes/',
                method: 'POST',
                body: note,
            }),
            invalidatesTags: ['Note']
        }),
        updateNote: build.mutation<INote,INote>({
            query: (note) => ({
                url: `/notes/${note.id}`,
                method: 'PATCH',
                body: note,
            }),
            invalidatesTags: ['Note']
        }),
        deleteNotes: build.mutation<INote,INote>({
            query: (note) => ({
                url: `/notes/${note.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Note']
        }),
        fetchNotes: build.query<INote,number | null>({
            query: (id) => ({
                url: `/notes/${id}`,
            })
        }),
        deleteAllNotes: build.mutation<[],string>({
            query: (str) => ({
                url: `/notes`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Note']
        }),
        fetchStats: build.query<ICounter[],string>({
            query: () => ({
                url: `/notes/stats`
            }),
            providesTags: result => ["Counter"]
        }),
    })
})