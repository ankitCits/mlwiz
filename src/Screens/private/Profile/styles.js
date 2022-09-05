import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.PRIMARY,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subheaderTextContainer:{
        paddingTop:2,
        paddingLeft:25
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
        width: 16,
        height: 16,
        zIndex: 1,
    },
    subContainer: {
        backgroundColor: '#52d6e5',
        borderRadius: 50,
        padding: 10,
        marginLeft: 10,
        zIndex: 0,
        
    },
    lastWeek:{
        textAlign:'left',
        fontSize:30,
        fontWeight:500,
        paddingTop:20,
        paddingLeft:25,
        
    },
    lastWeekSubHeader:{
        paddingLeft:5,
    },
    Notification:{
        textAlign:'left',
        fontSize:30,
        fontWeight:'500',
        paddingTop:30,
        paddingLeft:25,
    },
    iconContainerNoti:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft:50,
        
    },
    iconsubContainer: {
        backgroundColor: '#52d6e5',
        borderRadius: 50,
        padding: 10,
        zIndex: 0,
       // backgroundColor:"red"
    },
    NotificationText:{
        fontSize:20,fontWeight:'400',flexDirection:"row"
    },
    NotificationsubText:{
        paddingTop:15,
        fontSize:20,
        fontWeight:'500',
        //backgroundColor:"red",
    },
});

export { styles };