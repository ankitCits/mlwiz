import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    item: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        color: Colors.BLACK,
        fontSize: 12
    },
    toggleContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginHorizontal: 8
    },
});
export { styles };