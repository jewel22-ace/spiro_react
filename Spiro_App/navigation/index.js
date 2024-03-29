import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import Patient_Details from '../screens/patient_details';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Patient_Details" component={Patient_Details} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MyStack;