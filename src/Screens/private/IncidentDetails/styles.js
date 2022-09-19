import { StyleSheet } from "react-native";
import Colors from "../../../Themes/Colors";

const styles=StyleSheet.create({
    accountContainer: {
        paddingHorizontal: 12,
        paddingBottom: 12,
        backgroundColor:"#cdeedb",
        // borderBottomLeftRadius: 16,
        // borderBottomRightRadius: 16,
        //zIndex:1,
    },
    container: {
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        zIndex:1
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
    indicatorStyle:{
        borderWidth:1,
        borderColor:Colors.WHITE,
    },
    tabContainer: {
        backgroundColor: "#cdeedb",
        width: '100%',
        alignSelf: 'center',
        
    },
    selectedTabText:{
        color:"#112041",
    },
    tabText:{
        color:Colors.GREY2,
    },
    indicatorStyle: {
        borderWidth: 1,
        borderColor: "#112041"
    },
    headingContainer:{
        // /flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 8,
        marginVertical:12,
        flexDirection:"column",
        // borderLeftWidth:1,
        // borderColor:"black",
        // lineHeight:1,
        //backgroundColor:"red",
        marginTop:8,
        
    },
    headingStatus:{
        flexDirection:"row",
        paddingTop:5,
    },
    headerLogo:{
       marginHorizontal:14,
       flexDirection:"column"
    },
    subhederText:{
        paddingVertical:15,
        paddingTop:10,
        
    },
    textHeader:{
        padding:25,
        borderLeftWidth:1,
        borderLeftColor:'lightblue',
        height:100,
        marginHorizontal:21,
        fontSize:15,
        fontWeight:"500",   
        color:Colors.BLACK, 
        
    },
    textLight:{
        marginTop:8,
        fontSize:13,
        color:Colors.DARK_GREY
    },
    textContainer:{
        backgroundColor:"#e4ecf9",
        fontSize:12
    },
    subTextOne:{
        fontSize:16,
    },
    profileContainer:{
        paddingLeft:15,
    },
    middleContainer:{
        flexDirection:"row",
        height:300,
        //backgroundColor:"red"
    },
    bottomContainer:{
        justifyContent:"flex-end",
        //flexWrap:"wrap",
        borderWidth:1,
        padding:10,
        margin:10,
    },
    NoteHeading:{
        fontSize:18,
        paddingTop:5
    },
    NoteHeading1:{
        paddingLeft:5,
        paddingTop:5,
    },
    subText:{
        paddingLeft:60,
        alignItems:"center"
    },
});
export {styles};