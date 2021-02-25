import {Platform, StyleSheet, Text, TextStyle} from 'react-native';
import React, {FunctionComponent} from 'react';

import colors from '../config/colors';

interface Props {
  style?: TextStyle;
}

const AppText: FunctionComponent<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontWeight: '800',
  },
});

export default AppText;
