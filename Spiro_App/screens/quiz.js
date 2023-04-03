import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques_num, set_ques_num] = useState(0);
    const getQuiz = async () => {
        global.score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const data = require('../questions.json');
        console.log(data.Questions);
        console.log(data.Questions.length);
        setQuestions(data.Questions)

    };
    useEffect(() => {
        getQuiz();
    }, []);

    const handleNextPress = () => {
        set_ques_num(ques_num + 1)
        console.log('Next')
        console.log(ques_num)
    }
    const handleBackPress = () => {
        if (ques_num != 0) {
            set_ques_num(ques_num - 1)
            console.log('Back')
            console.log(ques_num)
        }

    }

    const handleOptionClick = (s) => {
        console.log('tap', s)
        score[ques_num] = s;
        if (ques_num != 15) { set_ques_num(ques_num + 1) }

        console.log('score', score)
    }
    return (
        <View style={styles.container}>
            {questions && (<View style={styles.parent}>
                <View style={styles.ques_cont}>
                    <Text style={styles.ques_text}>{questions[ques_num].question}</Text>
                </View>
                <View style={styles.opt_cont}>
                    <TouchableOpacity style={styles.opt_button} onPress={() => { handleOptionClick(0) }}>
                        <Text style={styles.opt_text} >Never</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opt_button} onPress={() => { handleOptionClick(1) }}>
                        <Text style={styles.opt_text}>Rarely</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opt_button} onPress={() => { handleOptionClick(2) }}>
                        <Text style={styles.opt_text}>Sometimes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opt_button} onPress={() => { handleOptionClick(3) }}>
                        <Text style={styles.opt_text}>Often</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opt_button} onPress={() => { handleOptionClick(4) }}>
                        <Text style={styles.opt_text}>Very Often</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bot_cont}>
                    <TouchableOpacity style={styles.button} onPress={handleBackPress}>
                        <Text style={styles.button_text}>Back</Text>
                    </TouchableOpacity>
                    {ques_num != 15 &&
                        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                            <Text style={styles.button_text}>NEXT</Text>
                        </TouchableOpacity>
                    }
                    {ques_num == 15 &&
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
                            <Text style={styles.button_text}>RESULT</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>)}

        </View>
    );
}
export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
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
    button: {

        backgroundColor: '#023E8A',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,

    },
    button_text: {
        fontSize: 18,
        fontWeight: 600,
        color: 'white',

    },
    ques_text: {
        fontSize: 28,

    },
    opt_text: {
        fontSize: 18,
        fontWeight: '500',

    },
    opt_button: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#90E0EF',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%'
    },

});
