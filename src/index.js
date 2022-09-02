import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Navigations';
import Colors from './Themes/Colors';
import SplashScreen from 'react-native-splash-screen';
import AuthState from './Context/AuthContext/authState';
const index = () => {
    SplashScreen.show();
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.WHITE}
                translucent={false}
            />
            <AuthState>
                <Navigation />
            </AuthState>
        </>
    );
};

export default index;
