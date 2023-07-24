import { StyleSheet, Text, View } from 'react-native';
import Signin from './src/screens/Signin';

export default function App() {
  return (
    <View style={styles.container}>
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
