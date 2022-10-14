import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {FooterQueryApi} from "./services/adminFooterApi";
import {ModalSlice} from "./reducers/ModalSlice";
import BasketSlice from "./reducers/BasketSlice";
import { loadState, saveState } from "./localStorage/localStorage";

const rootReducer = combineReducers({
    // ModalSlice: ModalSlice,
    BasketSlice: BasketSlice,
    [FooterQueryApi.reducerPath]: FooterQueryApi.reducer,

})

const persistedState = loadState();
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        BasketSlice: persistedState && persistedState.cart
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            FooterQueryApi.middleware,
        ),

});

store.subscribe(() => {saveState({cart: store.getState().BasketSlice})})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
