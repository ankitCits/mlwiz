import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Incidents from '../Screens/private/Incidents';
import CustomDrawer from './drawer';
import Explore from '../Screens/private/Explore';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const drawerArray = [
    {
        name: 'Incidents',
        component: props => <Incidents {...props} />,
    },
    {
        name: 'Explore',
        component: props => <Explore {...props} />,
    },


];

const PrivateRoute = props => {
    return (
        <Drawer.Navigator
            headerMode="none"
            initialRouteName="Incidents"
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            {drawerArray.map((item, index) => {
                return (
                    <Drawer.Screen
                        key={index}
                        name={item.name}
                        screenOptions={{ headerShown: false }}
                        options={{ headerShown: false }}>
                        {p => <item.component {...p} {...props} />}
                    </Drawer.Screen>
                );
            })}
        </Drawer.Navigator>
    );
};

export default PrivateRoute;

