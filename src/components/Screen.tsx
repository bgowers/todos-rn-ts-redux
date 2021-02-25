import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import React from 'react';

interface ScreenProps {
  style?: ViewStyle;
}

const Screen: React.FunctionComponent<ScreenProps> = ({style, children}) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
  },
  parentContainer: {
    flex: 1,
  },
});

export default Screen;
