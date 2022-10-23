import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />

      <Button
        title="Detail 2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />

      <Button
        title="Detail 3 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
      <Button
        title="headerless"
        onPress={() => navigation.navigate('Headerless')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
