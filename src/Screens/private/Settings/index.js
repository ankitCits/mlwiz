import React from "react";
import { Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../Components/header";
import { styles } from "./styles";

const Settings = (props) => {

    return (
        <>
            <SafeAreaView>
                <Header navigation={props.navigation} title={'Settings'} showBack={true} showFilter={false} showSearch={false} />

                <View style={styles.mainContainer}>
                    <Text style={{color:"black"}}>No Data Found</Text>
                </View>
            </SafeAreaView>
        </>
    )
};
export default Settings;
