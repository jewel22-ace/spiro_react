import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MyStack from './navigation';
const App = () => {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
