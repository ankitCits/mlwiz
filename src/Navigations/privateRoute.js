import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../Screens/private/Dashboard';
import CustomDrawer from './drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const drawerArray = [
    {
        name: 'Dashboard',
        component: props => <Dashboard {...props} />,
    },

];

const PrivateRoute = props => {
    return (
        <Drawer.Navigator
            headerMode="none"
            initialRouteName="Dashboard"
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

