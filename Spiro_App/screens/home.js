import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/title';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.ban_cont}>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/2756/2756521.png',
                    }
                    }
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Patient_Details")}
                style={styles.button}>
                <Text style={styles.button_text}>START</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },

    banner: {
        height: 300,
        width: 300,

    },
    ban_cont: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        width: '100%',
        backgroundColor: '#023E8A',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    button_text: {
        fontSize: 24,
        fontWeight: 600,
        color: 'white',
    },
});
