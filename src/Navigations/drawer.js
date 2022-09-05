import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useWindowDimensions, View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Colors from '../Themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { screenHeight, screenWidth } from '../Themes/Metrices';
import { IMAGES } from '../Themes/Constants';
import { TextAvatar } from './../Components/text-avatar/index';
function CustomDrawer(props) {
    const width = useWindowDimensions().width * 0.7;
    const screens = [
        { label: 'Incidents', redirectTo: 'Incidents', icon: 'file-tray-stacked' },
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
                    {/* <View style={styles.avatar}>
                        <Icon name='person' size={40} />
                    </View> */}
                    <TextAvatar text={'L B'} backgroundColor={Colors.PRIMARY} textColor={Colors.WHITE} size={70} type={'round'} />
                    <View style={styles.ring1}></View>
                    <View style={styles.ring2}></View>
                    <View style={styles.ring3}></View>
                </View>
                <View style={styles.profileNameContainer}>
                    <Text style={styles.profileText}>Lenre B</Text>
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
                                    style={{ width: width - 20, backgroundColor: 'transparent', margin: 0, padding: 0 }}
                                    icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? `${item.icon}` : `${item.icon}-outline`} />}
                                    label={`${item.label}`}
                                    activeBackgroundColor={Colors.WHITE}
                                    activeTintColor={Colors.PRIMARY}
                                    labelStyle={{ color: (isFocused) ? Colors.PRIMARY : Colors.BLACK, fontWeight: '700', zIndex: 999 }}
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
        marginVertical: 20
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
        zIndex: 10
    },
    profileText: {
        fontSize: 24,
        fontWeight: '900',
        color: Colors.WHITE
    },
    drawerItem: {
        flexDirection: 'row'
    },
    signOut: {
        flex: 1, justifyContent: 'flex-end', marginBottom: 40
    },
    signOutLabel: {
        color: Colors.BLACK, fontWeight: '700'
    },
    ring1: {
        position: "absolute",
        top: -60,
        left: -60,
        width: 190,
        height: 190,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderColor: Colors.PRIMARY,
        opacity: 0.3,
        borderWidth: 60,
    },
    ring2: {
        position: "absolute",
        top: -165,
        left: -165,
        width: 400,
        height: 400,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderColor: Colors.PRIMARY,
        opacity: 0.2,
        borderWidth: 165,
    },
    ring3: {
        position: "absolute",
        top: -260,
        left: -260,
        width: 600,
        height: 600,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderColor: Colors.PRIMARY,
        opacity: 0.1,
        borderWidth: 275,
    },
});