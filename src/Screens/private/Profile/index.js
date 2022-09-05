import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';
import Colors from '../../../Themes/Colors';
import { IMAGES } from '../../../Themes/Constants';
import { TextAvatar } from '../../../Components/text-avatar';
import Header from '../../../Components/header';

const Profile = (props) => {
    return (
        <SafeAreaView>
            <Header navigation={props.navigation} title={'Profile'} showFilter={false} showSearch={false} />
            <ScrollView>
                <View>
                    <View style={styles.accountContainer}>
                        <Text style={styles.titleText}>Ankit Singh</Text>
                        <Text style={styles.subText}>Test1@gmail.com</Text>
                        <Text style={styles.subText}>Account owner</Text>
                        <Text style={{ paddingTop: 10, color: 'darkblue' }}>+91 9099999999</Text>
                        <Text style={styles.subText}>India</Text>
                        <Text style={{ paddingTop: 10, color: "red", fontSize: 12 }}>
                            Proceed to web app and verify mobile number to received to Phone &amp; SMS notification
                        </Text>
                    </View>

                    <View style={styles.lastWeek}>
                        <Text style={{ fontSize: 20, fontWeight: '400' }}> Last Week</Text>
                        <View style={styles.lastWeekSubHeader}>
                            <Text style={{ color: "green" }}>0 Acknowledge</Text>
                            <Text style={{ color: "green" }}>0 Resolved</Text>
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
                    <View style={{ paddingTop: 15, paddingLeft: 20 }}>
                        <Text>Sign Out</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
