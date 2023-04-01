import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/title';

const Home = () => {
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
            <TouchableOpacity>
                <Text>Button</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,

    },
    ban_cont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
