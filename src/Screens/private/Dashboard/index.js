import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TextAvatar } from '../../../Components/text-avatar';
import Colors from '../../../Themes/Colors';

const Dashboard = () => {
    return (
        <>
            <SafeAreaView>
                {/* Header */}
                <View style={{ backgroundColor: Colors.PRIMARY, height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                    <TextAvatar text={'Ravi Mehta'} backgroundColor={Colors.WHITE} textColor={Colors.PRIMARY} size={40} type={'square'} />
                    <Text style={{ color: Colors.WHITE, fontSize: 20, fontWeight: '600', paddingHorizontal: 10 }}>Incidents</Text>
                </View>
                {/* Header End */}
            </SafeAreaView>
        </>
    );
};

export default Dashboard;
