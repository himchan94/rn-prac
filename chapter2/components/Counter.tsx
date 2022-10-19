import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

interface counterProps {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({number, onIncrease, onDecrease}: counterProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
