import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ques_cont}>
                <Text>Question</Text>
            </View>
            <View style={styles.opt_cont}>
                <TouchableOpacity>
                    <Text>Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bot_cont}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                    <Text>NEXT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                    <Text>END</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Quiz;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    ques_cont: {
        marginVertical: 16,
    },
    opt_cont: {
        marginVertical: 16,
        flex: 1,
    },
    bot_cont: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

});
