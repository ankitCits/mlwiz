import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../../../Themes/Colors';
import { screenHeight, screenWidth } from '../../../Themes/Metrices';

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:Colors.BLUE_LIGHT,
        width:screenWidth(100),
        height:20,
        
    },
    ItemContainer:{
        paddingLeft:15,
        paddingHorizontal:10,
        marginTop:10,
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
        marginHorizontal:30
    },
    logoutContainer: {
        marginTop: 40
    },
    bottomContainer:{
        paddingTop:20,  
        paddingLeft:10, 
        marginTop:40,
        color:Colors.BLUE,
    },
    subText:{
        paddingTop:9,
        color:Colors.BLUE,
    },

});
export { styles };