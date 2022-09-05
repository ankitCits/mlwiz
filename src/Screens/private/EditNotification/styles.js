import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ItemContainer:{
        paddingLeft:10,
        
    },
    textLight: {
        marginTop: 8,
        color: Colors.DARK_GREY,
        fontSize: 15,
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
        marginTop: 40
    },
    bottomContainer:{
        paddingTop:20,  
        paddingLeft:10,  
    },
    subText:{
        paddingTop:9,
        
    },

});
export { styles };