import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Colors from '../../../Themes/Colors';
import Header from '../../../Components/header';
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const EditNotification = (props) => {
    return (
        <SafeAreaView>
            <Header navigation={props.navigation} title={'Edit Notifications'} showBack={true} showFilter={false} showSearch={false} />
            <ScrollView>
                <View>
                    <Text style={styles.textLight}>At 0 minutes</Text>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Allow Critical Notifications</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
export default EditNotification;