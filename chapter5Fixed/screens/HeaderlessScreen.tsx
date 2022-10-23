import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderlessScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text>HeaderlessScreen</Text>
        <Button
          title="뒤로가기"
          onPress={() => {
            navigation.dispatch(StackActions.pop());
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;

const styles = StyleSheet.create({});
