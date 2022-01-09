import Colors from '@themes/Colors';
import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const Login: React.FC = () => {
  return (
    <SafeAreaView style={styles.pages}>
      <Text>Login </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: Colors.pages,
    paddingHorizontal: 8,
  },
});

export default Login;
