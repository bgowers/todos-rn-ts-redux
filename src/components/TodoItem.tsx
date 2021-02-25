import {StyleSheet, TouchableOpacity} from 'react-native';
import {deleteTodo, toggleTodo} from '../store/todos/actions';
import {useDispatch, useSelector} from 'react-redux';

import AppText from './AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {RootState} from '../store/types';
import colors from '../config/colors';
import {selectTodoById} from '../store/todos/selectors';

interface TodoItemProps {
  id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({id}) => {
  const todo = useSelector((state: RootState) => selectTodoById(state, id));
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(id));
  const handleToggle = () => dispatch(toggleTodo(id));

  return todo ? (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleToggle}
      style={[
        styles.container,
        todo.completed && {backgroundColor: colors.medium},
      ]}
    >
      {todo.completed && (
        <MaterialCommunityIcons
          color={colors.green}
          name="check"
          size={25}
          style={styles.complete}
        />
      )}
      <AppText style={styles.text}>{todo.text}</AppText>
      <MaterialCommunityIcons
        color={colors.red}
        name="delete"
        onPress={handleDelete}
        size={25}
        style={styles.delete}
      />
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  complete: {
    paddingRight: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 20,
    width: '100%',
  },
  delete: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  text: {flex: 1, flexWrap: 'wrap', paddingRight: 25},
});

export default TodoItem;
