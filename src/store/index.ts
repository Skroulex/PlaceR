import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ModalSlice} from "./reducers/ModalSlice";
import BasketSlice from "./reducers/BasketSlice";
import { loadState, saveState } from "./localStorage/localStorage";

const rootReducer = combineReducers({
    // ModalSlice: ModalSlice,
    BasketSlice: BasketSlice
})

const persistedState = loadState(); 
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        BasketSlice: persistedState && persistedState.cart
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
    
});

store.subscribe(() => {saveState({cart: store.getState().BasketSlice})})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
