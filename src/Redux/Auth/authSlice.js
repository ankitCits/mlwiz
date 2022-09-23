import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setUser: (state, { payload: { user } }) => {
            state.user = { ...state.user, ...user };
        },
        setToken: (state, { payload: { token } }) => {
            state.token = { ...state.token, ...token };
        },
    },
});

export const { setUser, setToken } = slice.actions;

export default slice.reducer;

export const getUser = state => state.auth.user;
export const getUserToken = state => state.auth.token;
