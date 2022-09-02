import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },

    indicatorStyle: {
        borderWidth: 1,
        borderColor: Colors.WHITE
    },
    tabContainer: {
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        alignSelf: 'center',
    },
    selectedTabText: {
        color: Colors.WHITE,
    },
    tabText: {
        color: '#52d6e5',
    },
    tabLabel: {
        // width: '100%',
        // alignSelf: 'center',
        // padding: 0,
        // margin: 0,
        // backgroundColor: 'red'
    }
});

export { styles }