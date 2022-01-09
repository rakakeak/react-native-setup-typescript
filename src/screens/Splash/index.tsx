import {navigate, replace} from '@navigations/functions';
import Colors from '@themes/Colors';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Splash: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      replace('Login');
    }, 3000);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigate('Login')}
      style={styles.container}>
      {/* <FastImage
        accessibilityLabel="logo_splash"
        source={LOGO}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.logo}
      /> */}
      <Text>SPLASH</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.pages,
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default Splash;
