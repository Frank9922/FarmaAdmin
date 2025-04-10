import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath: 'check',

    baseQuery: fetchBaseQuery({

        baseUrl: import.meta.env.VITE_BACKEND_URL,

        prepareHeaders: (headers) => {

            const token = localStorage.getItem('token');

            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');

            if(token && token.length > 0) {

                const fulltoken= token.replaceAll('"', '')

                headers.set('Authorization', `Bearer ${fulltoken}`)

            }
            return headers;
        }
    }),

    endpoints: (builder) => ({
        

        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            })
        }),

        getUser: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET'
            })
        }),

        getUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET'
            }),
            providesTags: ['Users'],
        }),

        getProfesion: builder.query({
            query: () => ({
                url: '/profesions',
                method: 'GET'
            }),
            providesTags: ['Profesions'],
        }),

        updateUser: builder.mutation({
            query: ({userId, updateUser}) => ({
                url: `/users/${userId}`,
                method: 'PUT',
                body: updateUser
            }),
            invalidatesTags: ['Users'],
            
        }),

        getPayments: builder.query({
            query:() => ({
                url: '/payments',
                method: 'GET'
            }),
            providesTags: ['Payments'],
        }),

        createPayment: builder.mutation({
            query: (createPayment) => ({
                url: '/payments',
                method: 'POST',
                body: createPayment
            }),
            invalidatesTags: ['Payments']
        }),

        destroyPayment: builder.mutation({
            query: (paymentId) => ({
                url: `/payments/${paymentId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Payments']
        })

    })
})
export const { 
    useLoginMutation,
    useUpdateUserMutation,
    useGetUsersQuery,
    useGetUserQuery,
    useGetProfesionQuery,
    useGetPaymentsQuery,
    useCreatePaymentMutation,
    useDestroyPaymentMutation
} = adminApi;