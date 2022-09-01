import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';

import PublicRoute from './publicRoute';

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <PublicRoute />
        </NavigationContainer>
    );
};

export default Navigation;
