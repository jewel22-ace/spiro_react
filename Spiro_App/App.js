import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './screens/home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
