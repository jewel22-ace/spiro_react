
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

import React, { useState } from 'react';


const Patient_Details = ({ navigation }) => {
    const [name, onNameChange] = React.useState('');
    const [age, onAgeChange] = React.useState('');
    const [weight, onWeightChange] = React.useState('');
    const [sex, onSexChange] = React.useState('');
    const [sh, onSHChange] = React.useState('');

    const handleProceedClick = () => {
        if (name == '' || age == '' || weight == '' || sex == '' || sh == '') {
            console.log('empty')
            Alert.alert(
                'Some fields are empty'
            )
        } else {
            global.P_Details = [name, age, weight, sex, sh];
            { navigation.navigate("Quiz") }

        }
    }

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.ban_cont}>
                    <Text style={styles.ban_text}>Patient Details</Text>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Full Name</Text>
                </View>
                <View style={styles.input_cont}>
                    <TextInput style={styles.input_style}
                        autoCorrect={false}
                        onChangeText={onNameChange}
                        value={name}>

                    </TextInput>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Age</Text>
                </View>
                <View style={styles.input_cont}>
                    <TextInput style={styles.input_style}
                        autoCorrect={false}
                        keyboardType='numeric'
                        onChangeText={onAgeChange}
                        value={age.toString()}>
                    </TextInput>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Weight (kg)</Text>
                </View>
                <View style={styles.input_cont}>
                    <TextInput style={styles.input_style}
                        autoCorrect={false}
                        keyboardType='numeric'
                        onChangeText={onWeightChange}
                        value={weight.toString()}>
                    </TextInput>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Sex (Male/Female)</Text>
                </View>
                <View style={styles.input_cont}>
                    <TextInput style={styles.input_style}
                        autoCorrect={false}
                        onChangeText={onSexChange}
                        value={sex}>
                    </TextInput>
                </View>
                <View style={styles.label_cont}>
                    <Text style={styles.label_text}>Smoking History (Yes/NO)</Text>
                </View>
                <View style={styles.input_cont}>
                    <TextInput style={styles.input_style}
                        autoCorrect={false}
                        onChangeText={onSHChange}
                        value={sh}>
                    </TextInput>
                </View>


                <View>
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={() => navigation.navigate("Quiz") }
                        onPress={handleProceedClick}
                    >
                        <Text style={styles.button_text}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}
export default Patient_Details;
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },

    ban_cont: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ban_text: {
        fontSize: 36,
        fontWeight: '600',
    },
    label_cont: {
        padding: 10,
    },
    label_text: {
        fontSize: 12,
        fontWeight: '300',
    },
    input_cont: {
        padding: 10,
        width: '100%',
    },
    input_style: {
        height: 50,
        paddingStart: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        fontSize: 20,

    },
    button: {
        width: '100%',
        backgroundColor: '#023E8A',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    button_text: {
        fontSize: 24,
        fontWeight: 600,
        color: 'white',
    },
});
