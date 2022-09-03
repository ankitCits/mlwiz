import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { useWindowDimensions, View, StyleSheet } from 'react-native';

function CustomDrawer(props) {
    const width = useWindowDimensions().width * 0.3;

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.menuContainer}>
                <View
                    style={[
                        styles.menuItemsCard,
                        { backgroundColor: '#fff2df', width: width, height: width },
                    ]}>
                    <>
                        <View
                            style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
                            <DrawerItem
                                label="Dashboard"
                                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                                onPress={() => {
                                    props.navigation.navigate('Dashboard');
                                }}
                            />
                        </View>
                    </>
                    <DrawerItem
                        style={{
                            position: 'absolute',
                            left: 0,
                            width: width,
                            height: width,
                        }}
                        label="Dashboard"
                        labelStyle={{ color: '#609806' }}
                        onPress={() => {
                            props.navigation.navigate('Dashboard');
                        }}
                    />
                </View>

            </View>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    menuItemsCard: {
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 10,
    },
    circleContainer: {
        // width: 50,
        // height: 50,
        // borderRadius: 25,
        // padding: 10,
    },
});