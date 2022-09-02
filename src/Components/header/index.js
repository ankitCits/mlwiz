import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../Themes/Colors';
import { IMAGES } from '../../Themes/Constants';
import { TextAvatar } from '../text-avatar';

const Header = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TextAvatar text={'Ravi Mehta'} backgroundColor={'#FFF'} textColor={Colors.PRIMARY} size={40} type={'square'} />
            <Text style={styles.headerText}>Incidents</Text>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.subContainer}><Image source={IMAGES.filter} style={styles.icon} /></View>
                <View style={styles.subContainer}><Image source={IMAGES.search} style={styles.icon} /></View>
            </View>
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
    header:{
        flexDirection:'row',
        alignItems:'center'
    },
    headerText:{ 
        color: '#FFF', 
        fontSize: 20, 
        fontWeight: '600', 
        paddingHorizontal: 10 
    },
    iconContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
    },
    icon:{
        width:20,
        height:20,
    },
    subContainer:{
        backgroundColor:Colors.SECONDARY,
        opacity:0.3,
        borderRadius:50,
        padding:7,
        marginLeft:10,
    }
});

export default Header;

