import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../../Themes/Colors';
import { IMAGES } from '../../Themes/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation, showBack = false, title, showFilter = true, showSearch = true }) => {

    return (
        <View style={styles.container}>


            <View style={styles.header}>
                {showBack &&
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color={Colors.WHITE} size={24} name={'md-chevron-back'} />
                    </TouchableOpacity>
                }
                {!showBack &&
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                        <Icon color={Colors.WHITE} size={24} name={'filter'} />
                    </TouchableOpacity>
                }
                <Text style={styles.headerText}>{title}</Text>
            </View>

            <View style={styles.iconContainer}>
                {
                    showFilter &&
                    <View style={styles.subContainer}>
                        <Image source={IMAGES.filter} style={styles.icon} />
                    </View>
                }
                {
                    showSearch &&
                    <View style={styles.subContainer}>
                        <Image source={IMAGES.search} style={styles.icon} />
                    </View>
                }
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 10
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        width: 14,
        height: 14,
        zIndex: 1,
    },
    subContainer: {
        backgroundColor: '#52d6e5',
        borderRadius: 50,
        padding: 8,
        marginLeft: 10,
        zIndex: 0,
    },

});

export default Header;

