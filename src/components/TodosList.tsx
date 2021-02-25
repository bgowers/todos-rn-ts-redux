import {FlatList, StyleSheet, View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';

import {Filter} from '../store/filters/types';
import FilterButton from './FilterButton';
import React from 'react';
import TodoItem from './TodoItem';
import {selectFilteredTodoIds} from '../store/todos/selectors';

const TodosList: React.FC = () => {
  const todoIds = useSelector(selectFilteredTodoIds, shallowEqual);

  return (
    <>
      <View style={styles.filterContainer}>
        <FilterButton filter={Filter.All} />
        <FilterButton filter={Filter.Incomplete} />
        <FilterButton filter={Filter.Complete} />
      </View>
      <FlatList
        data={todoIds}
        keyExtractor={(id) => id.toString()}
        renderItem={({item}) => <TodoItem id={item} />}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    width: '100%',
  },
});

export default TodosList;
