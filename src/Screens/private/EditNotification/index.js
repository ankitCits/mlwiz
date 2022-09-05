import React from "react";
import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Colors from '../../../Themes/Colors';
import { IMAGES } from '../../../Themes/Constants';
import { TextAvatar } from '../../../Components/text-avatar';
import Header from '../../../Components/header';
import { ScrollView } from "react-native-gesture-handler";


const EditNotification=(props)=>{
    return(
            <SafeAreaView>
                 <Header navigation={props.navigation} title={'EditNotification'} showFilter={false} showSearch={false} />
                <ScrollView>
                 <View>
                    <View style={styles.accountContainer}>
                    </View>
                    </View>

                    <View style={styles.Headertitle}>
                        <Text>
                        At 0 minutes    
                        </Text>
                    </View>

                    <View>
                        
                    </View>
                    </ScrollView>
            </SafeAreaView>
            )
};
export default EditNotification;