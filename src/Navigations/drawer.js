import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { useWindowDimensions, View, StyleSheet } from 'react-native';

import Colors from '../Themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { screenHeight } from '../Themes/Metrices';

function CustomDrawer(props) {
    const width = useWindowDimensions().width * 0.7;
    const screens = [
        { label: 'Dashboard', redirectTo: 'Dashboard', icon: 'home' },
        { label: 'Explore', redirectTo: 'Explore', icon: 'search' },
        { label: 'My Events', redirectTo: 'Events', icon: 'calendar' },
        { label: 'Tasks', redirectTo: 'Tasks', icon: 'list-circle' },
        { label: 'Invite Friends', redirectTo: 'Invite', icon: 'mail' },
        { label: 'Settings', redirectTo: 'Settings', icon: 'settings' },
        { label: 'About', redirectTo: 'About', icon: 'information-circle' },
    ]
    const getActiveRouteState = function (routes, index, name) {
        return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    };
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.menuContainer}>
                {
                    screens.map((item, key) => {
                        const isFocused = getActiveRouteState(
                            props.state.routes,
                            props.state.index,
                            `${item.label}`
                        )
                        return (
                            <View style={{ flexDirection: 'row', }} key={key}>
                                <DrawerItem
                                    focused={isFocused}
                                    style={{ width: width - 20 }}
                                    icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? `${item.icon}` : `${item.icon}-outline`} />}
                                    label={`${item.label}`}
                                    activeBackgroundColor={Colors.WHITE}
                                    activeTintColor={Colors.PRIMARY}
                                    labelStyle={{ color: (isFocused) ? Colors.PRIMARY : Colors.BLACK, fontWeight: '700' }}
                                    onPress={() => props.navigation.navigate(`${item.redirectTo}`)} />
                            </View>
                        );
                    })
                }

                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 60 }}>
                    <DrawerItem
                        style={{ width: width }}
                        icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? `exit` : `exit-outline`} />}
                        label={`Sign Out`}
                        labelStyle={{ color: Colors.BLACK, fontWeight: '700' }}
                        onPress={() => console.log('Signout')} />
                </View>

            </View>
        </DrawerContentScrollView >
    );
}

export default CustomDrawer;

const styles = StyleSheet.create({

    menuContainer: {
        flex: 1,
        height: screenHeight(100),
    },

});