import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';
import {RouteProp} from '@react-navigation/native';

// type routeType = RouteProp<{params: {id: number}}, 'params'>;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29bff6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => {
            return {
              title: `상세정보 - ${route?.params?.id}`,
              headerBackVisible: false,
              headerLeft: ({onPress}) => (
                <TouchableOpacity onPress={onPress}>
                  <Text>Left</Text>
                </TouchableOpacity>
              ),
              headerTitle: ({children}) => (
                <View>
                  <Text>{children}</Text>
                </View>
              ),
              headerRight: () => (
                <View>
                  <Text>Right</Text>
                </View>
              ),
            };
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
