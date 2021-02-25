import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import TodosScreen from './screens/TodosScreen';
import colors from './config/colors';
import configureStore from './store/configureStore';

const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodosScreen />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  temp: {
    padding: 20,
  },
});

export default App;
