import React, {FC} from 'react';

import AddTodo from '../components/AddTodo';
import Screen from '../components/Screen';
import {StyleSheet} from 'react-native';
import TodosList from '../components/TodosList';
import colors from '../config/colors';

const TodosScreen: FC = () => {
  return (
    <Screen style={styles.container}>
      <AddTodo />
      <TodosList />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    flex: 1,
    padding: 20,
  },
});

export default TodosScreen;
