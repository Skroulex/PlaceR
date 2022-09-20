import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ModalSlice} from "./reducers/ModalSlice";

const rootReducer = combineReducers({
    // ModalSlice: ModalSlice,
})

export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(

        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
