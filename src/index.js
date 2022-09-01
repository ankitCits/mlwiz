import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Navigations';
import Colors from './Themes/Colors'
const index = () => {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.WHITE}
                translucent={false}
            />
            <Navigation />
        </>
    );
};

export default index;
