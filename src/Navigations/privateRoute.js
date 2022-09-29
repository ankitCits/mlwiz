import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Incidents from '../Screens/private/Incidents';
import IncidentDetails from '../Screens/private/IncidentDetails';
import CustomDrawer from './drawer';
import Profile from '../Screens/private/Profile';
import EditNotification from '../Screens/private/EditNotification';
import EscalationPolicy from '../Screens/private/EscalationPolicy';
import Settings from '../Screens/private/Settings';
import About from '../Screens/private/About';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const drawerArray = [
    {
        name: 'Incidents',
        component: props => <Incidents {...props} />,
    },
    {
        name: 'Profile',
        component: props => <Profile {...props} />,
    },
    {
        name: 'EditNotification',
        component: props => <EditNotification {...props} />,
    },
    {
        name: 'IncidentDetails',
        component: props => <IncidentDetails {...props} />,
    },
    {
        name: 'EscalationPolicy',
        component: props => <EscalationPolicy {...props} />,
    },
    {
        name: 'Settings',
        component: props => <Settings {...props} />,
    },
    {
        name: 'About',
        component: props => <About {...props} />,
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

