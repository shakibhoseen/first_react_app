import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{borderColor: "blue", borderWidth: 2, padding:10, borderRadius: 15, backgroundColor: "#2f6ff3", margin: 10}}>Open up App.js to start working My yea app!</Text>
      <Button title='Tap me again!'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
