import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {FooterQueryApi} from "./services/adminFooterApi";

const rootReducer = combineReducers({
    [FooterQueryApi.reducerPath]: FooterQueryApi.reducer,
})

export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            FooterQueryApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
