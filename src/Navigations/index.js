import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import SplashScreen from 'react-native-splash-screen';

import AuthContext from '../Context/AuthContext';
import Colors from '../Themes/Colors';
const Navigation = () => {
    const authContext = useContext(AuthContext);
    const { userToken, isLoading } = authContext;
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide()
        }, 100);
    }, [])



    return (
        <NavigationContainer ref={navigationRef}>
            {
                isLoading ?
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}>
                        <ActivityIndicator size="large" color={Colors.PRIMARY} />
                    </View>
                    :
                    userToken != null ? <PublicRoute /> : <PrivateRoute />
            }
        </NavigationContainer>
    );
};

export default Navigation;
