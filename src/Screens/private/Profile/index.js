import React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { styles } from './styles';
import Colors from '../../../Themes/Colors';
import { IMAGES } from '../../../Themes/Constants';
import { TextAvatar } from '../../../Components/text-avatar';

const Profile = () => {
    return (
        <>
            <View style={styles.container}>
                
                <View style={styles.header}>
                <TouchableOpacity>
                    <TextAvatar text={'Ravi Mehta'} backgroundColor={'#FFF'} textColor={Colors.PRIMARY} size={40} type={'square'} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Ankit Singh</Text>
                
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.subContainer}>
                    <Image source={IMAGES.person} style={styles.icon} />
                </View>
            </View>
            </View>
            <View style={styles.subheaderTextContainer}>
                <View>
            <Text>Test1@gmail.com</Text>
            <Text >Account owner</Text>
            <Text style={{paddingTop:12}}>+91 9099999999</Text>
            <Text>India</Text>
            <Text style={{paddingTop:15,color:"red",justifyContent:"flex-start"}}> proceed to web app and verify mobile number to received to Phone & SMS notification</Text>
                </View>
            </View>

            <View style={styles.lastWeek}>
            <Text style={{fontSize:20,fontWeight:'400'}}> Last Week</Text>
            <View style={styles. lastWeekSubHeader}>
            <Text style={{color:"green"}}>0 Acknowledge</Text>
            <Text style={{color:"green"}}>0 Resolved</Text>
            </View>
            </View>

            <View style={styles.Notification}>
                <View>
                    <Text style={styles.NotificationText}>Notification Rule</Text>
                </View>
                <TouchableOpacity>
                     <View style={styles.iconContainerNoti}>
                    <View style={styles.iconsubContainer}>
                        <Image source={IMAGES.back_arrow} style={styles.icon} />
                    </View>            
                </View> 
                </TouchableOpacity>

                    <View style={styles.NotificationsubText}>
                    <Text>At 0 minutes</Text>
                    <Text>Email (Test1@gmail.com)</Text>
                    <Text>Push  (To all Devices)</Text>
                    </View>

                    <View style={styles.NotificationsubText}>
                    <Text>At 1 minutes</Text>
                    <Text>Message (+91 9909999999)</Text>
                    </View>

                    <View style={styles.NotificationsubText}>
                    <Text>At 2 minutes</Text>
                    <Text>Call (+91 9909999999)</Text>
                    </View>
                    
                    <View style={styles.NotificationsubText}>
                    <Text>At 2 minutes</Text>
                    <Text>Push (To All Devices)</Text>
                    </View>

                    
                    <View style={styles.NotificationsubText}>
                    <Text>Allow Critical Notification</Text>
                    </View>
                    
            </View>
            <View style={{paddingTop:15,paddingLeft:20}}>
                <Text>Sign Out</Text>
            </View>
           
        </>
    );
};

export default Profile;
