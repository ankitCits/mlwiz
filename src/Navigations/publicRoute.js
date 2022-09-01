import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../Screens/public/Landing';
import Login from '../Screens/public/Login';

const Stack = createNativeStackNavigator();

const stackArray = [
    {
        name: 'Landing',
        component: props => <Landing {...props} />,
    },
    {
        name: 'Login',
        component: props => <Login {...props} />,
    },
];

const PublicRoute = props => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="Landing"
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

export default PublicRoute;
