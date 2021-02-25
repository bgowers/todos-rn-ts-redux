import {FlexStyle, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';

import AppText from './AppText';
import colors from '../config/colors';

interface Props {
  color?: string;
  onPress: () => void;
  style?: FlexStyle;
  textColor?: string;
  title: string;
}

const Button: FunctionComponent<Props> = ({
  color = colors.red,
  onPress,
  style,
  textColor = colors.white,
  title,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[{backgroundColor: color}, styles.container, style]}
    >
      <AppText style={{color: textColor}}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 10,
  },
});

export default Button;
