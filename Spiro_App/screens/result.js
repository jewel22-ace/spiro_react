import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';

const Result = ({ navigation }) => {
    const sum = () => {

        var s = 0;
        var d = global.score;
        for (let i = 0; i < d.length; i++) {
            s = s + d[i];
        }
        return s;
    }
    useEffect(() => {
        sum();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.ban_cont}>
                <Text style={styles.ban_text}>Result</Text>
            </View>
            <View style={styles.P_Details_cont}>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Patient Name : {global.P_Details[0]}</Text>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Patient Age : {global.P_Details[1]}</Text>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Patient Weight : {global.P_Details[2]}</Text>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Patient Sex : {global.P_Details[3]}</Text>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Smoking History : {global.P_Details[4]}</Text>
                </View>
                <View style={styles.score_cont}>
                    <Text style={styles.score_text}>{sum()}</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.button_text}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Result;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    label_cont: {
        padding: 10,
    },
    label_text: {
        fontSize: 12,
        fontWeight: '500',
    },
    P_Details_cont: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    ban_cont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ban_text: {
        fontSize: 70,
        fontWeight: 500,
    },
    score_cont: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    score_text: {
        fontSize: 200,
        fontWeight: 600,

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
