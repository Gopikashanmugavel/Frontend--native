import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Deals = () => (
  <View style={styles.deals}>
    <Text style={styles.headerText}>Deals For You</Text>
    <Image 
      source={require('./img/Group 1869.png')} 
      style={styles.dealsImage} 
    />
  </View>
);

const styles = StyleSheet.create({
  deals: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dealsImage: {
    height: 150,
    width: 380,
    marginLeft: 10,
  },
});

export default Deals;
