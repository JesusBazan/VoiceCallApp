import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import background from './assets/callBackground.jpg'
import CallNumberInput from './src/components/CallNumberInput';
import Numberpad from './src/components/Numberpad';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={background} style={styles.image} blurRadius={50}>
        <CallNumberInput/>
        <Numberpad/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
