import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Modal, } from 'react-native';
import { styles } from './styles';
import Colors from '../../../Themes/Colors';
import Header from '../../../Components/header';
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../../Components/inputs';
import { useIsFocused } from '@react-navigation/native';

const EditNotification = (props) => {
    const isFocused = useIsFocused();

    const [isVisible, setVisible] = useState(false);
    const [value, setValues] = useState(0);

    useEffect(() => {
        if (isFocused) {
            setValues();
        }
    }, [isFocused]);

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
                                <TouchableOpacity
                                    onPress={() => { setVisible(true) }}>
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>Push (To All Devices)</Text>
                            <View style={styles.toggleContainer}>
                                <TouchableOpacity
                                    onPress={() => { setVisible(true) }} >
                                    <Icon color={Colors.PRIMARY} size={16} name={'md-pencil'} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>Add new rule at 0 minutes</Text>
                </View>
                <View style={styles.ItemContainer}>
                    <Text style={styles.textLight}>At 1 minutes</Text>
                    <TouchableOpacity
                        onPress={() => { setVisible(true) }}>
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
                    <TouchableOpacity
                        onPress={() => { setVisible(true) }}>
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
                    <TouchableOpacity
                        onPress={() => { setVisible(true) }}>
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

                <TouchableOpacity
                    onPress={() => { setVisible(true) }}
                    style={styles.bottomContainer}>
                    <Text>Add a new rule</Text>
                </TouchableOpacity>

                <Modal visible={isVisible}
                    transparent={true}
                    //onPress={() => setVisible(true)}
                    animationType="none"
                >
                    <View style={styles.modalContainer}>
                        <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                            <Text style={styles.modalTitle}>Edit rule</Text>
                            <TouchableOpacity
                                style={styles.modalClose}
                                onPress={() => setVisible(false)}
                            >
                                <Icon name={'close'} size={16} />
                            </TouchableOpacity>
                        </View>
                        <Input
                            labelText={'At minute'}
                            value={value}
                            type={'numeric'}
                            onChangeText={text => setValues(text)}
                            placeholder={''}
                        />
                        <Text style={styles.modalTitle}>Notify via</Text>
                        <View style={styles.modalDetail}>
                            <Text style={styles.detailsText}>Call (+91 9098481515)</Text>
                            <Text style={styles.detailsText}>Message (+91 9098481515)</Text>
                            <Text style={styles.detailsText}>Email (aiwizmobile1@gmail.com)</Text>
                        </View>
                        <View style={styles.modalBottom}>
                            <Text style={styles.modalBottomText}>Push (To All Devices) </Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <View style={{}}>
                                <View style={styles.trashContainer}>
                                    <Icon name={'trash'} size={16} />
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={styles.rightContainer}>
                                    <Icon name={'md-pencil'} size={16} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* <View style={styles.logoutContainer}>
                    <Text style={[styles.textLight, { textDecorationStyle: 'solid' }]}>Sign Out</Text>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
};
export default EditNotification;