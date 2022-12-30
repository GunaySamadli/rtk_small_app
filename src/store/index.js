import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./Apis/productsApi";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(productsApi.middleware)
    },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } from "./Apis/productsApi";