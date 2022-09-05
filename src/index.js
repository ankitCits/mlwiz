import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Navigations';
import Colors from './Themes/Colors';
import AuthState from './Context/AuthContext/authState';
const index = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.PRIMARY}
                translucent={false}
            />
            <AuthState>
                <Navigation />
            </AuthState>
        </>
    );
};

export default index;
