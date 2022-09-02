import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <PrivateRoute />
            {/* <PublicRoute /> */}
        </NavigationContainer>
    );
};

export default Navigation;
