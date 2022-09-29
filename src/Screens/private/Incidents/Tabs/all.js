import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from '../../../../Components/card';


const All = ({ data }) => {
    const navigation = useNavigation();
    const renderItemResolved = ({item, index}) => {
      return (
        <>
          <Card item={item} index={index} navigation={navigation} />
        </>
      );
    };
    return (
<>
                <SafeAreaView>
                    <FlatList
                        data={data}
                        renderItem={renderItemResolved}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ marginBottom: 130 }}
                    />
                </SafeAreaView>
            </>
    );
};



export default All;