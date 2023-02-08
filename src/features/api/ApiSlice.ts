import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface user {
    id?: string,
    username: string,
    email: string,
    contact: string
}

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        users: builder.query<user[], void>({
            query: () => "/users",
            providesTags: ['user']
        }),
        user: builder.query<user, string>({
            query: (id) => `/users/${id}`,
            providesTags: ['user']
        }),
        addUser: builder.mutation<{}, user>({
            query: (user) => ({
                url: "/users",
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['user']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['user']
        }),
        updateUser: builder.mutation<void, user>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['user']
        })
    })
})

export const {
    useUsersQuery,
    useUserQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation }
    = usersApi