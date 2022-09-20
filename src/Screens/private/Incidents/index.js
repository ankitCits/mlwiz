import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SceneMap, TabBar, TabView, } from 'react-native-tab-view';
import Card from '../../../Components/card';
import Header from '../../../Components/header';
import Colors from '../../../Themes/Colors';
import { styles } from './styles';

const Incidents = (props) => {

    const dashboardData = [
        {
            "created_at": "2022-07-03T02:07:08.252551-04:00",
            "dedup_key": null,
            "details": "Modi qui et consectetur molestiae non facere quis sint doloribus. Consequatur accusantium et quia nisi dolorem voluptate aperiam repudiandae ipsum. Ipsam quasi voluptatem sapiente quaerat a rerum dolor qui quia. Aut voluptas eligendi sed minima atque qui repudiandae eligendi in.\n\nIn veniam minus ipsum molestiae quia sunt accusantium soluta sed. Ipsa repellat voluptatem eos eum vero aut illo a aut. Fuga in magnam voluptatem officia corrupti cumque nobis omnis molestiae. Tenetur at animi impedit aperiam autem quia consectetur nulla earum.",
            "escalation_level": 0,
            "id": 679,
            "last_escalation": "2022-08-02T02:06:51.412574-04:00",
            "last_processed": null,
            "service_id": "0b740dd5-5935-4ecf-be02-6f852caa5216",
            "source": "generic",
            "status": "closed",
            "summary": "Iusto non minus atque maiores perspiciatis."
        },
        {
            "created_at": "2022-07-03T02:07:16.518046-04:00",
            "dedup_key": null,
            "details": "",
            "escalation_level": 0,
            "id": 41589,
            "last_escalation": "2022-08-02T02:06:51.412574-04:00",
            "last_processed": null,
            "service_id": "34fc13fc-eceb-48e6-98e5-5fea8d31eb5e",
            "source": "manual",
            "status": "closed",
            "summary": "Numquam qui ex."
        },
        {
            "created_at": "2022-07-03T02:07:52.862297-04:00",
            "dedup_key": null,
            "details": "",
            "escalation_level": 0,
            "id": 22116,
            "last_escalation": "2022-08-02T02:06:51.412574-04:00",
            "last_processed": null,
            "service_id": "72b53094-b2e6-4fa7-b2a4-59887d925b73",
            "source": "grafana",
            "status": "closed",
            "summary": "Tempora eligendi fugit quisquam molestiae voluptatem id exercitationem incidunt ab perspiciatis earum."
        }
    ]

    const Triggered = (props) => {
        return (
            <>
                <SafeAreaView>
                    <FlatList
                        data={dashboardData}
                        renderItem={renderItemResolved}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ marginBottom: 130 }}
                    />
                </SafeAreaView>
            </>
        );
    };

    const Acknowledge = (props) => {
        return (
            <>
                <SafeAreaView>
                    <FlatList
                        data={dashboardData}
                        renderItem={renderItemResolved}
                        keyExtractor={(item, index) => item.id.toString()}
                        style={{ marginBottom: 130 }}
                    />
                </SafeAreaView>
            </>
        );
    };

    const renderItemResolved = ({ item, index }) => {

        return (
            <>
                <Card item={item} index={index} navigation={props.navigation} />
            </>
        )
    };

    const Resolved = (props) => {
        return (
            <>
                <SafeAreaView>
                    <FlatList
                        data={dashboardData}
                        renderItem={renderItemResolved}
                        keyExtractor={(item, index) => item.id.toString()}
                        style={{ marginBottom: 130 }}
                    />
                </SafeAreaView>
            </>
        )
    }

    const All = () => {
        return (
            <>
                <SafeAreaView>
                    <FlatList
                        data={dashboardData}
                        renderItem={renderItemResolved}
                        keyExtractor={(item, index) => item.id.toString()}
                        style={{ marginBottom: 130 }}
                    />
                </SafeAreaView>
            </>
        );
    };

    const renderScene = SceneMap({
        first: Triggered,
        second: Acknowledge,
        third: Resolved,
        forth: All
    });

    // const renderScene=({route,jumpTo})=>{

    //     if(routes.title=='first'){
    //         return('IncidentDetail')
    //     }
    // }

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'Triggered' },
        { key: 'second', title: 'Acknowledge' },
        { key: 'third', title: 'Resolved' },
        { key: 'forth', title: 'All' },
    ]);

    const renderTabBar = props => {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.indicatorStyle}
                activeColor={Colors.WHITE}
                style={styles.tabContainer}

                renderLabel={({ route }) => (
                    <>
                        <Text
                            style={[
                                styles.tabLabel,
                                route.key === props.navigationState.routes[index].key
                                    ? styles.selectedTabText
                                    : styles.tabText,
                            ]}>
                            {route.title}
                        </Text>
                    </>
                )}
            />
        );
    };

    return (
        <>
            <SafeAreaView>
                <Header navigation={props.navigation} title={'Incidents'} />
                <View style={styles.container}>
                    <TabView
                        navigationState={{ index, routes }}
                        onIndexChange={setIndex}
                        renderScene={renderScene}
                        renderTabBar={renderTabBar}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

export default Incidents;
