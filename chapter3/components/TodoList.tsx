import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todos;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({todos, onToggle, onRemove}: TodoListProps) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <View>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </View>
      )}
      keyExtractor={(item: Todo) => item.id.toString()}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
