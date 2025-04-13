import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function UploadScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/loading-screen.png')}
        style={styles.image}
        onError={(e) => console.log('❌ IMAGE FAILED TO LOAD:', e.nativeEvent)}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text: {
    color: 'white',
    fontSize: 24,
    zIndex: 1,
  },
});
