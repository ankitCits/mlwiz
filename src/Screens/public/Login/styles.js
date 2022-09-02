import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Colors';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.WHITE,
        justifyContent: 'center'
    },
    container: {
        padding: 10,
    },
    logo: {
        margin: 5,
        marginBottom: 20,
    },
    inputContainer: {
        padding: 4,
        paddingLeft: 12,
        marginBottom: 10,
        marginHorizontal: 5,
        backgroundColor: Colors.SECONDARY,
        borderRadius: 5
    },
    label: {
        color: Colors.DARK_GREY,
    },
    input: {
        color: Colors.GREY
    },
    radioInput: {
        margin: 5,
        marginLeft: 15
    },
    btn: {
        padding: 12,
        marginHorizontal: 6,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 5
    },
    btnText: {
        color: Colors.WHITE,
        fontSize: 14,
    }
});

export { styles };