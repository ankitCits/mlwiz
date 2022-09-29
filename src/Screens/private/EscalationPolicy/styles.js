import { StyleSheet } from "react-native";
import Colors from "../../../Themes/Colors";
import { screenWidth,screenHeight } from "../../../Themes/Metrices";

const styles= StyleSheet.create({
      
   
    policyCount:{
        paddingTop:5,
        position: "relative",
        display: "flex",
        // width:screenWidth(98),
        // height:screenHeight(5),
    },
    subSearchContainer:{
     backgroundColor:Colors.GREY1,
     borderRadius: 50,
     padding: 8,
     //marginLeft: 10,
     zIndex: 0,
     flexDirection:"row",
     justifyContent:"space-between"
    },
    mainContainer:{
        paddingTop:10,
        paddingLeft:12,
        borderWidth:1,
        margin:9,
        justifyContent:"center"
    },
    footerBody:{
        margin:5,
        fontSize:14,
        fontWeight:400,
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 5,
        margin: 15,
        marginBottom: 8,
    },
    cardBody: {
        margin: 10,
        flexDirection: 'column',
        width: screenWidth(85),
        alignSelf: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        border: 1,
        background: "#00B4CC",
        color: "black",
        borderRadius: 0,
        fontSize: 20,

    },
    row: { flexDirection: 'column' },
    left: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor:Colors.BLUE_LIGHT,
        paddingLeft:10,
        marginBottom:5
    },
    right: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //backgroundColor:"red"
    },
    bottom: {
        // marginBottom: 20,
        color: Colors.GREY1
    },
    headerText: {
        //color: 'black',
        // fontWeight: '500',
        fontSize: 14,
        lineHeight: 25
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
        height: screenHeight(40),
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
});
export {styles};