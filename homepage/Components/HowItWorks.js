import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HowItWorks = () => (
  <View style={styles.container}>
    <View style={styles.howItWorks}>
      <Text style={styles.title}>How ParkQwik Works</Text>
      <View style={styles.howItWorksItem}>
        <Image source={require('./img/Rectangle 503.svg')} style={styles.firstImage} />
        <Image source={require('./img/iPhone X Mockup Front View 3.svg')} style={styles.secondImage} />
        <Image source={require('./img/play_circle.svg')} style={styles.thirdImage} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  howItWorks: {
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  howItWorksItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  secondImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  thirdImage: {
    width: 50,
    height: 50,
  },
});

export default HowItWorks;
