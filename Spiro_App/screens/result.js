import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Result = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Result</Text>
            </View>
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
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Result;

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
