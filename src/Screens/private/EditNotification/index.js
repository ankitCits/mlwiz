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
                <View style={styles.ItemContainer}>
                    <Text style={styles.textLight}>At 0 minutes</Text>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Email (aiwizmobile1@gmail.com)</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Push (To All Devices)</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>Add new rule at 0 minutes</Text>
                </View>
                <View style={styles.ItemContainer}>
                    <Text style={styles.textLight}>At 1 minutes</Text>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Message (+91 9099999999)</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>Add new rule at 0 minutes</Text>
                </View>

                <View style={styles.ItemContainer}>
                    <Text style={styles.textLight}>At 2 minutes</Text>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Call (+91 9099999999)</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>Add new rule at 0 minutes</Text>
                </View>

                <View style={styles.ItemContainer}>
                    <Text style={styles.textLight}>At 5 minutes</Text>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Push (To All Devices)</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>Add new rule at 0 minutes</Text>
                </View>

                <View style={styles.bottomContainer}>

                </View>
                <View>
                <Text style={{color:Colors.BLUE}}>Add a new rule</Text>
                </View>
               

            </ScrollView>
        </SafeAreaView>
    )
};
export default EditNotification;