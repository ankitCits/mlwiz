import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Screens/private/Dashboard';

const Stack = createNativeStackNavigator();

const stackArray = [
    {
        name: 'Dashboard',
        component: props => <Dashboard {...props} />,
    },

];

const PrivateRoute = props => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="Dashboard"
        // screenOptions={{ animation: 'slide_from_right', headerShown: false }}
        >
            {stackArray.map((item, index) => {
                return (
                    <Stack.Screen
                        key={index}
                        name={item.name}
                        screenOptions={{ headerShown: false }}
                        options={{ headerShown: false }}>
                        {p => <item.component {...p} {...props} />}
                    </Stack.Screen>
                );
            })}
        </Stack.Navigator>
    );
};

export default PrivateRoute;
