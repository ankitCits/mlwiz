import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    container: { flexDirection: 'row', width: '100%', height: '100%' },
    indicatorStyle: {
        backgroundColor: Colors.PRIMARY,
        borderWidth: 3,
        borderColor: Colors.WHITE
    },
    tabContainer: {
        height: 70,
        backgroundColor: Colors.PRIMARY
    },
    tabLabel:{
        margin:0,
    }
});

export { styles }