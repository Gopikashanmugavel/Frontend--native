import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HowItWorks = () => (
  <View style={styles.container}>
    <Text style={styles.header}>How ParkQwik Works</Text>
    <View style={styles.imagesContainer}>
      <Image
        source={require('./img/Rectangle 503.svg')}
        style={styles.firstImage}
      />
      <Image
        source={require('./img/iPhone X Mockup Front View 3.svg')}
        style={styles.secondImage}
      />
      <Image
        source={require('./img/play_circle.svg')}
        style={styles.thirdImage}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowRadius: 10, // iOS shadow
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstImage: {
    width: 100,
    height: 100,
  },
  secondImage: {
    width: 100,
    height: 100,
  },
  thirdImage: {
    width: 50,
    height: 50,
  },
});

export default HowItWorks;
