import React, { useState, useEffect } from 'react';
import { getAccessToken, removeAccessToken } from '../../Storage';
// import { useDispatch } from 'react-redux';
// import { setToken, setUser } from '../../redux/auth/authSlice';
import AuthContext from './index';

const AuthState = (props) => {
    // const dispatch = useDispatch();

    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuthenticationStatus()
    }, [])

    const checkAuthenticationStatus = async () => {
        try {
            const token = await getAccessToken();
            // const user = await getUserLocal();
            // console.log(token,user);
            // dispatch(setUser({ user }));
            // dispatch(setToken({ token }));
            setUserToken(token);
        } catch (err) {
        }
        setIsLoading(false)
    }

    const onAuthentication = async (token) => {
        // console.log(token);
        setUserToken(token);
    }

    const userSignOut = async () => {
        console.log('userSignOut');
        await removeAccessToken();
        setUserToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                onAuthentication,
                userToken,
                isLoading,
                userSignOut,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;