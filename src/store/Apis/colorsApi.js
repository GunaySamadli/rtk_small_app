import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from '@faker-js/faker';


const colorsApi = createApi({
    reducerPath: 'colors',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchColors: builder.query({
                providesTags: (result, error, product) => {
                    const tags = result.map((color) => {
                        return { type: 'Color', id: color.id };
                    });
                    tags.push({ type: 'ProductsColors', id: product.id });
                    return tags;
                },
                query: (product) => {
                    return {
                        url: '/colors',
                        params: {
                            productId: product.id,
                        },
                        method: 'GET',
                    };
                },
            }),
            addColor: builder.mutation({
                invalidatesTags: (result, error, product) => {
                    return [{ type: 'ProductsColors', id: product.id }];
                },
                query: (product) => {
                    return {
                        url: '/colors',
                        method: 'POST',
                        body: {
                            productId: product.id,
                            name:faker.color.rgb({ format: 'css' }),
                        },

                    }
                }
            }),
            deleteColor: builder.mutation({
                invalidatesTags: (result, error, product) => {
                    return [{ type: 'ProductsColors', id: product.id }];
                },
                query: (color) => {
                    return {
                        url: `/colors/${color.id}`,
                        method: 'DELETE',

                    }
                }
            })
        }
    }
})

export const { useFetchColorsQuery, useAddColorMutation, useDeleteColorMutation } = colorsApi
export { colorsApi }