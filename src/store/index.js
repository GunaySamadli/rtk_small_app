import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./Apis/productsApi";
import { colorsApi } from "./Apis/colorsApi";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [colorsApi.reducerPath]: colorsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(colorsApi.middleware)
    },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } from "./Apis/productsApi";
export { useFetchColorsQuery, useAddColorMutation, useDeleteColorMutation } from "./Apis/colorsApi";