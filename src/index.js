import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Navigations';
import Colors from './Themes/Colors';
import AuthState from './Context/AuthContext/authState';
import { Provider } from 'react-redux';
import { store } from './Store/store';

const index = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.PRIMARY}
                translucent={false}
            />
            <Provider store={store}>
                <AuthState>
                    <Navigation />
                </AuthState>
            </Provider>
        </>
    );
};

export default index;
