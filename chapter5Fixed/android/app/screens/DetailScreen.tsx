import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute, StackActions} from '@react-navigation/native';

type LooseObject = {
  [key: string]: any;
};

const DetailScreen = () => {
  const route = useRoute();
  const {params}: LooseObject = route;

  const navigation = useNavigation();

  const popAction = StackActions.pop();
  const popToTopAction = StackActions.popToTop();

  useEffect(() => {
    navigation.setOptions({
      title: `상세정보 ${params.id}`,
    });
  }, [navigation, params.id]);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => {
            navigation.dispatch(
              StackActions.push('Detail', {id: params.id + 1}),
            );

            // navigation.navigate('Detail', {id: params.id + 1});
          }}
        />
        <Button
          title="뒤로가기"
          onPress={() => {
            navigation.dispatch(popAction);
          }}
        />
        <Button
          title="처음으로"
          onPress={() => {
            navigation.dispatch(popToTopAction);
          }}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});
