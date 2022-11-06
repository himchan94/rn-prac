import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, StackActions} from '@react-navigation/native';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';

const WriteScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const navigation = useNavigation();
  const popAction = StackActions.pop();

  const {onCreate} = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });

    navigation.dispatch(popAction);
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoidingView: {
    flex: 1,
  },
});
