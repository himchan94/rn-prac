import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, Dispatch} from 'react';

interface WriteEditorProps {
  title: string;
  body: string;
  onChangeTitle: Dispatch<React.SetStateAction<string>>;
  onChangeBody: Dispatch<React.SetStateAction<string>>;
}

const WriteEditor = ({
  title,
  body,
  onChangeTitle,
  onChangeBody,
}: WriteEditorProps) => {
  const bodyRef = useRef<TextInput>(null!);

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록하세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
};

export default WriteEditor;

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263228',
  },
});
