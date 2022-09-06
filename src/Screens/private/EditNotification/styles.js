import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../../../Themes/Colors';
import { screenHeight, screenWidth } from '../../../Themes/Metrices';

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.BLUE_LIGHT,
        width: screenWidth(100),
        height: 20,

    },
    ItemContainer: {
        paddingLeft: 15,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    textLight: {
        marginTop: 15,
        color: Colors.DARK_GREY,
        fontSize: 16,

    },
    itemTitle: {
        color: Colors.GREY3,
        fontSize: 13,

    },
    toggleContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginHorizontal: 30
    },
    logoutContainer: {
        marginTop: 40
    },
    bottomContainer: {
        paddingTop: 20,
        paddingLeft: 10,
        marginTop: 40,
        color: Colors.BLUE,
    },
    subText: {
        paddingTop: 9,
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        paddingTop: screenHeight(3),
        padding: screenHeight(1),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 1,
        width: screenWidth(100),
        height: screenHeight(60),
    },
    modalTitle: {
        marginBottom: 15,
        margin: 5,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        color: '#D9D9D9'
    },
    modalClose: {
        alignSelf: "flex-start",
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    modalDetail: {
        margin: 6,
    },
    detailsText: {
        color: '#A1BBDC',
        fontSize: 16,
        margin: screenHeight(1),
    },
    modalBottom: {
        marginHorizontal: screenHeight(0.5),
        padding: screenHeight(1.5),
        backgroundColor: '#F3F6FB',
        borderRadius: 5,
    },
    modalBottomText: {
        color: '#99B1D8',
        fontSize: 17,
        fontWeight: '500',
    },
    btnContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    trashContainer: {
        backgroundColor: '#FDF1F4',
        marginVertical: 10,
        marginLeft: 10,
        padding: screenWidth(5),
        width: screenWidth(15),
        alignItems: 'center',
        borderRadius: 35,
    },
    rightContainer: {
        backgroundColor: '#F3F6FB',
        marginVertical: 10,
        marginHorizontal: 5,
        padding: screenWidth(5),
        width: screenWidth(15),
        borderRadius: 35,
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
});
export { styles };