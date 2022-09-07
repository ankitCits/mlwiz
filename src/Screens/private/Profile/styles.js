import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    accountContainer: {
        paddingHorizontal: 12,
        paddingBottom: 12,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        //backgroundColor:"powderblue",
    },
    titleText: {
        fontSize: 22,
        color: Colors.WHITE,
        paddingLeft:8,
    },
    subText: {
        fontSize: 12,
        color: Colors.WHITE,
        paddingLeft:8,
    },
    subViewContainer: {
        paddingHorizontal: 18,
        marginTop: 12,
        //paddingLeft:8,
    },
    titleTextSub: {
        color: Colors.DARK_GREY,
        fontSize: 17,
        fontWeight: '400'
    },
    statusTextSub: {
        paddingVertical: 3
    },
    notificationRules: {
        marginTop: 12,
        flex: 1
    },
    notificationTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginHorizontal: 8
    },
    editContainer: {
        backgroundColor: '#52d6e5',
        //backgroundColor:Colors.GREY1,
        borderRadius: 50,
        padding: 6,
    },
    subTextHeader:{
        paddingTop:5,
    },
    icon: {
        width: 16,
        height: 16,
        zIndex: 1,
    },

    textLight: {
        marginTop: 8,
        color: Colors.BLACK,
        fontSize: 13,
    },

    item: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        color: Colors.BLACK,
        fontSize: 12
    },
    toggleContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginHorizontal: 8
    },
    logoutContainer: {
        marginTop: 20
    }

});

export { styles };