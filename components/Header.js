import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.primary,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
    }
});

export default Header