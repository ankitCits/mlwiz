import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../../Themes/Colors';
import { TextAvatar } from '../text-avatar';

const Header = () => {

    return (
        <View style={styles.container}>
            <TextAvatar text={'Ravi Mehta'} backgroundColor={'#FFF'} textColor={Colors.PRIMARY} size={40} type={'square'} />
            <Text style={styles.headerText}>Incidents</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{ 
        backgroundColor: Colors.PRIMARY, 
        height: 64, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 16 
    },
    headerText:{ 
        color: '#FFF', 
        fontSize: 20, 
        fontWeight: '600', 
        paddingHorizontal: 10 
    },
});

export default Header;

