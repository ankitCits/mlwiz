import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Icon from 'react-native-vector-icons/Ionicons';
import Header from "../../../Components/header";
import { TextAvatar } from "../../../Components/text-avatar";
import Colors from '../../../Themes/Colors';
import { styles } from './styles';

const IncidentDetail = (props) => {

    const [dynamicBackGroundColor, setDynamicBackGroundColor] = useState('#cdeedb')

    const Details = (props) => {
        return (
            <>
                <View>
                    <Text>
                        This render Details
                    </Text>
                </View>
            </>
        );
    };

    const Timeline = (props) => {
        return (
            <>
                <View style={styles.headingContainer}>
                    <View style={styles.headingStatus}>
                        <View style={styles.headerLogo}>
                            <Icon color={Colors.PRIMARY} size={16} name={'md-ellipse'} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text>Activity</Text>
                        </View>
                    </View>
                    <View style={styles.textHeader}>
                        <Text style={styles.subTextOne}>Incident resolved by Dan Krohnemann</Text>
                        <Text style={styles.textLight}>a few second ago</Text>
                    </View>
                </View>

                <View style={styles.headingContainer}>
                    <View style={styles.headingStatus}>
                        <View style={styles.headerLogo}>
                            <Icon color={Colors.PRIMARY} size={16} name={'md-ellipse'} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text>Activity</Text>
                        </View>

                    </View>
                    <View style={styles.textHeader}>
                        <Text style={styles.subTextOne}>Incident Acknowledge Dan Krohnemann</Text>
                        <Text style={styles.textLight}>9 minutes ago</Text>
                    </View>
                </View>

                <View style={styles.headingContainer}>
                    <View style={styles.headingStatus}>
                        <View style={styles.headerLogo}>
                            <Icon color={Colors.PRIMARY} size={16} name={'md-ellipse'} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text>Activity</Text>
                        </View>
                    </View>
                    <View style={styles.textHeader}>
                        <Text style={styles.subTextOne}>Incident triggered and assigned to IOT alerts policy </Text>
                        <Text style={styles.textLight}>an hour ago</Text>
                    </View>
                </View>

            </>
        );
    };

    const Notes = () => {
        return (
            <>
                <View style={styles.headingStatus}>
                    <View style={styles.headerLogo}>
                        <TextAvatar text={'A P'} backgroundColor={Colors.PRIMARY} textColor={Colors.WHITE} size={40} type={'round'} />
                        {/* <Icon color={Colors.PRIMARY} size={30} name={'person-circle-sharp'} />   */}
                    </View>
                    <View style={styles.NoteHeading}>
                        <Text>Dan Krohnemann</Text>
                    </View>
                    <View style={styles.NoteHeading1}><Text> Sat 02:25:00 PM</Text></View>
                </View>
                <View style={styles.subText}>
                    <Text>@Suresh Nambiar the pressure has been increasing for last 2 hours</Text>
                </View>

                <View style={styles.middleContainer}>

                </View>

                <View style={styles.bottomContainer}>
                    <View>
                        <Text>Add Message to</Text>
                    </View>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <Icon color={Colors.PRIMARY} size={30} name={'chevron-forward-circle-outline'} />
                    </View>
                </View>
            </>
        );
    };

    const renderScene = SceneMap({
        first: Details,
        second: Timeline,
        third: Notes,
    })

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'Details' },
        { key: 'second', title: 'Timeline' },
        { key: 'third', title: 'Notes' },
    ]);

    const renderBar = props => {
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
            <SafeAreaView >
                <Header navigation={props.navigation} title={'Incident Details'} showBack={true} showFilter={false} showSearch={false} />
                <View style={styles.container}>
                    <View style={[styles.accountContainer, { backgroundColor: Colors.PRIMARY }]}>
                        <Text style={{ paddingTop: 10, paddingLeft: 8, color: Colors.WHITE, fontSize: 15, fontWeight: '350' }}>
                            Vessel Pressure Alert-Pressure is outside the desired         Range 0 to 18
                        </Text>
                        <Text style={{ paddingTop: 7, paddingLeft: 8, fontSize: 15, paddingBottom: 5, color: Colors.WHITE }}>
                            an hour ago ( 07 september 2022 19:00 PM )
                        </Text>
                    </View>
                    <TabView
                        navigationState={{ index, routes }}
                        onIndexChange={setIndex}
                        renderScene={renderScene}
                        renderTabBar={renderBar}
                    />
                </View>
            </SafeAreaView>
        </>
    );

};
export default IncidentDetail;