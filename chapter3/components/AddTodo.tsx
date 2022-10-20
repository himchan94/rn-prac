import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from 'react-native';

interface AddTodoProps {
  onInsert: (text: string) => void;
}

const AddTodo = ({onInsert}: AddTodoProps) => {
  const [text, setText] = useState<string>('');

  const onPress = () => {
    onInsert(text);
    setText('');

    /* 현재 나타난 키보드를 닫음 */
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        returnKeyType="done"
      />
      {/* TouchableNativeFeedback은 ios에서 사용하면 에러가 난다 */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Button />
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              <Button />
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

const Button = () => {
  return (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fonSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#25a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
  },
});

export default AddTodo;
