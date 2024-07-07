import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Deals = () => (
  <View style={styles.container}>
    <View style={styles.deals}>
      <Text style={styles.heading}>Deals For You</Text>
      <Image source={require('./img/Group 1869.png')} style={styles.image} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  deals: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 380,
    marginLeft: 10,
    resizeMode: 'contain', // Adjust as per your image requirements
  },
});

export default Deals;
