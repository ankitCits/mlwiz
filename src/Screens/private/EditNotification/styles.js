import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    accountContainer: {
        paddingHorizontal: 12,
        paddingBottom: 12,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    titleText: {
        fontSize: 24, color: Colors.WHITE
    },
    subText: {
        fontSize: 14, color: Colors.WHITE
    },
    Headertitle:{
        fontSize:20,
        fontWeight:500,
        paddingLeft:10,
        paddingTop:10,
        color:Colors.DARK_GREY,
    },
});
    export { styles };