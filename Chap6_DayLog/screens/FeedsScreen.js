import React from 'react';
import {StyleSheet, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import {Text} from 'react-native';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default FeedsScreen;
