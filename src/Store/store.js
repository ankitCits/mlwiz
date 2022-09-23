import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../Redux/Auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            serializableCheck: false
        }
    ),
});

