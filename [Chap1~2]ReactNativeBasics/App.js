import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.button}>
        <Button title="+1" onPress={increase}></Button>
        <Button title="-1" onPress={decrease}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  counterText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  counter: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
