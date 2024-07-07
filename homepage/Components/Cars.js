import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cars = () => (
  <View style={styles.container}>
    <View style={styles.travel}>
      <Text style={styles.title}>Your Car's Center</Text>
      <View style={styles.items}>
        <View style={styles.travelItem}>
          <Image source={require('./img/Group.svg')} style={styles.icon} />
          <Text style={styles.label}>Car Wash</Text>
        </View>
        <View style={styles.travelItem}>
          <Image source={require('./img/Group 464-1.svg')} style={styles.icon} />
          <Text style={styles.label}>Estimate Toll</Text>
        </View>
        <View style={styles.travelItem}>
          <Image source={require('./img/shop-bag_svgrepo.com.svg')} style={styles.icon} />
          <Text style={styles.label}>Shop</Text>
        </View>
        <View style={styles.travelItem}>
          <Image source={require('./img/traffic-light_svgrepo.com-1.svg')} style={styles.icon} />
          <Text style={styles.label}>Protocols</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  travel: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  travelItem: {
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default Cars;
