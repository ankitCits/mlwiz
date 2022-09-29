import React, { useState, useEffect } from "react";
import { View,Text, SafeAreaView,TouchableOpacity,Modal,Image } from "react-native";
import {styles} from './styles';
import Header from "../../../Components/header";
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../../Components/inputs';
import {IMAGES} from '../../../Themes/Constants';

const EscalationPolicy =(props)=>{
    const [isVisible, setVisible] = useState(false);

    return(
        <>
        <SafeAreaView>
        <Header navigation={props.navigation} title={'Escalation Policy'} showBack={true} showFilter={false} showSearch={false} />
            <View style={styles.policyCount}>
            {/* <Text style={styles.searchTerm}>Escalation Policy</Text>  */}
            <View style={styles.subSearchContainer}>
                <View style={{paddingLeft:30}}>
                    <Text>Escalation Policy</Text>
                </View>
                <TouchableOpacity>
                <Image source={IMAGES.search} style={styles.icon} />
                </TouchableOpacity>
             </View>
            </View>
           
            {/* <View style={styles.search}>
            <View style={{flexDirection:"column",justifyContent:"space-between",backgroundColor:"red"}}>
                <Text style={styles.searchTerm}></Text>
            </View>
            <View style={styles.searchButton}>
                <TouchableOpacity>
                <Image source={IMAGES.search} style={styles.icon} />
                </TouchableOpacity>
            </View>    
            </View> */}
            <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View>
                            <Text>Escalate after 1 minutes</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                 onPress={() => { setVisible(true) }}>
                                <Text>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <View>
                            <Text></Text>
                        </View>
                        <Text style={styles.headerText}>Ankit Singh</Text>
                        <Text style={styles.headerText}>Ankit Singh</Text>
                    </View>
                   <View style={styles.left}>
                    <Text>If no one acknowledges,repeat this policy an additional 0 times </Text>
                   </View>
                </View>
                <Modal visible={isVisible} 
                    transparent={true}
                    //onPress={() => setVisible(true)}
                    animationType="none"
                >
                    <View style={styles.modalContainer}>
                        <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                            <Text style={styles.modalTitle}>Add Policy</Text>
                            <TouchableOpacity
                                style={styles.modalClose}
                                onPress={() => setVisible(false)}
                            >
                                <Icon name={'close'} size={16} />
                            </TouchableOpacity>
                        </View>
                        <Input
                            labelText={'At minute'}
                           // value={value}
                            type={'numeric'}
                            //onChangeText={text => setValues(text)}
                            placeholder={''}
                        />
                        {/* <Text style={styles.modalTitle}>Notify via</Text> */}
                      
                        <View style={styles.modalBottom}>
                            
                        </View>
                        {/* <View style={styles.btnContainer}>
                            <View style={{}}>
                            <TouchableOpacity
                            onPress={() => setVisible(false)}>
                                <View style={styles.trashContainer}>
                                    <Icon name={'trash'} size={20} />
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                            <TouchableOpacity
                             onPress={() => setVisible(false)}>
                                <View style={styles.rightContainer}>
                                    <Icon name={'md-pencil'} size={16} />
                                </View>
                            </TouchableOpacity>
                            </View>
                            
                        </View> */}
                    </View>
                </Modal>
        </SafeAreaView>
        </>
    )
};

export default EscalationPolicy;