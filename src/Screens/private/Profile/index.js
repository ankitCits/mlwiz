import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';
import Header from '../../../Components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Themes/Colors';
import ToggleSwitch from 'toggle-switch-react-native'

const Profile = (props) => {
    const [notification, setNotification] = useState(true);
    const toggleNotification = () => {
        // rest of code
        setNotification(notification => !notification);
    }
    return (
        <SafeAreaView>
            <Header navigation={props.navigation} title={'Profile'} showFilter={false} showSearch={false} />
            <ScrollView  >
                <View style={{ flex: 1 }}>
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

                    <View style={styles.subViewContainer}>
                        <View>
                            <Text style={styles.titleTextSub}>Last Week</Text>
                            <Text style={[styles.statusTextSub, { color: 'orange' }]}>0 Acknowledge</Text>
                            <Text style={[styles.statusTextSub, { color: 'green' }]}>0 Resolved</Text>
                        </View>

                        <View style={styles.notificationRules}>
                            <View style={styles.notificationTitleContainer}>
                                <View>
                                    <Text style={[styles.titleTextSub]}>Notification Rules</Text>
                                </View>
                                <View style={styles.subContainer}>
                                    <TouchableOpacity style={styles.editContainer} onPress={() => props.navigation.navigate('EditNotification')}>
                                        <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View >
                                <Text style={styles.textLight}>At 0 minutes</Text>
                                <Text>Email (Test1@gmail.com)</Text>
                                <Text>Push  (To all Devices)</Text>
                            </View>

                            <View >
                                <Text style={styles.textLight}>At 1 minutes</Text>
                                <Text>Message (+91 9909999999)</Text>
                            </View>

                            <View >
                                <Text style={styles.textLight}>At 2 minutes</Text>
                                <Text>Call (+91 9909999999)</Text>
                            </View>

                            <View>
                                <Text style={styles.textLight}>At 2 minutes</Text>
                                <Text>Push (To All Devices)</Text>
                            </View>
                        </View>

                        <TouchableOpacity>
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>Allow Critical Notifications</Text>
                                <View style={styles.toggleContainer}>
                                    <ToggleSwitch
                                        isOn={notification}
                                        onColor={Colors.PRIMARY}
                                        offColor={Colors.GREY}
                                        size="small"
                                        onToggle={() => toggleNotification()}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.logoutContainer}>
                            <Text style={[styles.textLight, { textDecorationStyle: 'solid' }]}>Sign Out</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default Profile;
