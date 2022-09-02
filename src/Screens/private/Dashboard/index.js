import React, { useState } from 'react';
import { SafeAreaView, Text, useWindowDimensions, View } from 'react-native';
import {
    SceneMap, TabBar, TabView, NavigationState,
    SceneRendererProps,
} from 'react-native-tab-view';
import Header from '../../../Components/header';
import { TextAvatar } from '../../../Components/text-avatar';
import Colors from '../../../Themes/Colors';
import { styles } from './styles';

const Dashboard = () => {

    const Triggered = () => {
        return (
            <View style={{}}>
                <Text style={{}}>Triggered</Text>
            </View>)
    };

    const Acknowledge = () => (
        <View style={{}}>
            <Text>Acknowledge</Text>
        </View>
    );

    const Resolved = () => (
        <View style={{}}>
            <Text>Resolved</Text>
        </View>
    );

    const All = () => (
        <View style={{}}>
            <Text>All</Text>
        </View>
    );



    const renderScene = SceneMap({
        first: Triggered,
        second: Acknowledge,
        third: Resolved,
        forth: All
    });
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'Triggered' },
        { key: 'second', title: 'Acknowledge' },
        { key: 'third', title: 'Resolved' },
        { key: 'forth', title: 'All' },
    ]);

    const renderTabBar = props => {
        return (<TabBar
            gap={40}
            {...props}
            scrollEnabled
            activeColor={Colors.WHITE}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabContainer}
        />
        );
    };
    return (

        <SafeAreaView>
            <Header />
            <View style={styles.container}>
                <TabView
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    renderScene={renderScene}
                />
            </View>
        </SafeAreaView>

    );
};

export default Dashboard;
