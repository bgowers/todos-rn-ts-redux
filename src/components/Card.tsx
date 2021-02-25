import {StyleSheet, View} from 'react-native';

import AppText from './AppText';
import React from 'react';
import colors from '../config/colors';

interface CardProps {
  title?: string;
}

const Card: React.FunctionComponent<CardProps> = ({children, title}) => {
  return (
    <View style={styles.container}>
      {title && <AppText style={styles.title}>{title}</AppText>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    elevation: 1,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    width: '100%',
  },
  title: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default Card;
