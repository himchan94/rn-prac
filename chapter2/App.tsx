/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  const [number, setNumber] = useState<number>(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <SafeAreaView style={styles.full}>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
