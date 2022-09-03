import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { useWindowDimensions, View, StyleSheet, Image, Text } from 'react-native';

import Colors from '../Themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { screenHeight, screenWidth } from '../Themes/Metrices';
import { IMAGES } from '../Themes/Constants';

function CustomDrawer(props) {
    const width = useWindowDimensions().width * 0.7;
    const screens = [
        { label: 'Dashboard', redirectTo: 'Dashboard', icon: 'home' },
        { label: 'Incident', redirectTo: 'Explore', icon: 'search' },
        { label: 'Profile', redirectTo: 'Events', icon: 'person' },
        { label: 'Settings ', redirectTo: 'Tasks', icon: 'list-circle' },
        { label: 'About', redirectTo: 'Invite', icon: 'mail' },
        { label: 'Escalation policy', redirectTo: 'Settings', icon: 'settings' },
    ]
    const getActiveRouteState = function (routes, index, name) {
        return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    };
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.profileContainer}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.avatar}>
                        <Icon name='person' size={40} />
                    </View>
                </View>
                <View style={styles.profileNameContainer}>
                    <Text style={styles.profileText}>LenreB</Text>
                    {/* <Text>70 Events</Text> */}
                </View>
            </View>
            <View style={styles.menuContainer}>

                {
                    screens.map((item, key) => {
                        const isFocused = getActiveRouteState(
                            props.state.routes,
                            props.state.index,
                            `${item.label}`
                        )
                        return (
                            <View style={styles.drawerItem} key={key}>
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

                <View style={styles.signOut}>
                    <DrawerItem
                        style={{ width: width }}
                        icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? `exit` : `exit-outline`} />}
                        label={`Sign Out`}
                        labelStyle={styles.signOutLabel}
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
        height: screenHeight(80),
    },
    profileContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 16,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.GREY1
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    profileNameContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
    profileText: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: "left",
        color: Colors.PRIMARY
    },
    drawerItem: {
        flexDirection: 'row'
    },
    signOut: {
        flex: 1, justifyContent: 'flex-end', marginBottom: 40
    },
    signOutLabel: {
        color: Colors.BLACK, fontWeight: '700'
    }

});