import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import colors from '../config/colors';

interface AppTextInputProps extends TextInputProps {
  icon?: string;
  onChangeText: (text: string) => void;
}

const AppTextInput: React.FunctionComponent<AppTextInputProps> = ({
  icon,
  onChangeText,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={colors.medium}
        name={icon || ''}
        size={20}
        style={styles.icon}
      />
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10,
    padding: Platform.OS === 'ios' ? 15 : 0,
    paddingHorizontal: Platform.OS === 'android' ? 15 : undefined,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    width: '100%',
  },
});

export default AppTextInput;
