import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Themes/Colors";
import { screenWidth } from '../../Themes/Metrices';


const Card = ({ item, index, navigation }) => {

    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('IncidentDetails')}
            >
                <View style={styles.card} key={index}>
                    <View style={styles.cardBody}>
                        <View style={styles.left}>
                            <Text style={styles.textDetail}>#...{item.id}B</Text>
                        </View>
                        <View style={styles.right}>
                            <TouchableOpacity style={styles.btnResolve} >
                                <Text style={{ color: 'black' }}>Resolve</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.headerText}>{item.summary}</Text>
                    </View>
                    {/* <View style={styles.cardBody}>
                    <View style={styles.left}>
                        <Text style={styles.textDetail}>IOT Alert</Text>
                        <Image source={IMAGES.back_arrow} style={styles.backArrow} />
                    </View>
                    <View style={styles.right}>
                        <View style={styles.row}>
                            <Image source={IMAGES.person} style={styles.person} />
                            <Text style={styles.textDetail}>IOT Alert Policy</Text>
                        </View>
                    </View>
                </View> */}
                    <View style={[styles.cardBody]}>
                        {/* <View style={[styles.left]}>
                        <Image source={IMAGES.person} style={styles.person} />
                        <Text style={styles.textDetail}>Alert</Text>
                    </View> */}
                        <View style={styles.right}>
                            <Text style={styles.bottom}>4 Days aa go</Text>
                        </View>
                    </View>
                    {/* <View style={styles.cardFooter}>
                    <TouchableOpacity style={[styles.cardFooterDetail, styles.alarm]} >
                        <Text style={styles.footerText}>ALARM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardFooterDetail} >
                        <Text style={styles.footerText}>US East N.Virginia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardFooterDetail} >
                        <Text style={styles.footerText}>US East N.Virginia</Text>
                    </TouchableOpacity>
                </View> */}
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 5,
        margin: 15,
        marginBottom: 8,
    },
    cardBody: {
        margin: 10,
        flexDirection: 'row',
        width: screenWidth(85),
        alignSelf: 'center',
    },
    row: { flexDirection: 'row' },
    left: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    right: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    headerText: {
        color: 'black',
        // fontWeight: '500',
        fontSize: 16,
        lineHeight: 25
    },
    btnResolve: {
        backgroundColor: '#f2fcb3',
        width: screenWidth(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        alignContent: 'center'
    },
    textDetail: {
        color: Colors.GREY1
    },
    backArrow: {
        width: 20,
        height: 20,
        marginLeft: 35,
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: '#EBEEEF',
        marginVertical: 5,
        color: Colors.GREY1
    },
    cardFooter: {
        marginBottom: 10,
        flexDirection: 'row',
        width: screenWidth(90),
        alignSelf: 'center',
    },
    cardFooterDetail: {
        padding: 5,
        marginLeft: 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#5DD99D'
    },
    footerText: {
        color: Colors.WHITE,
        fontSize: 12
    },
    bottom: {
        // marginBottom: 20,
        color: Colors.GREY1
    },
    alarm: {
        backgroundColor: '#AC33F2'
    },
    person: {
        width: 15,
        height: 15,
        marginRight: 6,
        alignSelf: 'center'
    }

});

export default Card;