import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                providesTags: ['Products'],
                query: () => {
                    return {
                        url: '/products',
                        method: 'GET'
                    }
                }
            }),
            addProduct: builder.mutation({
                invalidatesTags: ['Products'],
                query: (product) => {
                    return {
                        url: '/products',
                        method: 'POST',
                        body: product
                    }
                }
            }),
            updateProduct: builder.mutation({
                invalidatesTags: ['Products'],
                query: (product) => {
                    return {
                        url: `/products/${product.id}`,
                        method: 'PUT',
                        body: product
                    }
                }
            }),
            deleteProduct: builder.mutation({
                invalidatesTags: ['Products'],
                query: (product) => {
                    return {
                        url: `/products/${product.id}`,
                        method: 'DELETE',
                    }
                }
            })
        }
    }

});
export const {
    useFetchProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi;
export { productsApi };