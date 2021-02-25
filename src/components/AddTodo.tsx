import React, {useState} from 'react';

import AppTextInput from './AppTextInput';
import Button from './Button';
import Card from './Card';
import {addTodo} from '../store/todos/actions';
import {useDispatch} from 'react-redux';

const AddTodo: React.FunctionComponent = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!todoText) return;

    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <Card title="Add New Todo">
      <AppTextInput
        onSubmitEditing={handleSubmit}
        icon="format-list-bulleted-type"
        placeholder="New Todo"
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </Card>
  );
};

export default AddTodo;
