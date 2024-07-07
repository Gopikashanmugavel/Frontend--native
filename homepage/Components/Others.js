import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Others = () => (
  <View style={styles.container}>
    <View style={styles.others}>
      <Text style={styles.heading}>Others</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.otherItem}>
          <View style={styles.container10}>
            <Image source={require('./img/Group 470-1.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Rentout Helmet</Text>
        </View>
        <View style={styles.otherItem}>
          <View style={styles.container10}>
            <Image source={require('./img/Group 471-1.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Fuel Price</Text>
        </View>
        <View style={styles.otherItem}>
          <View style={styles.container10}>
            <Image source={require('./img/shop-bag_svgrepo.com.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Shop</Text>
        </View>
        <View style={styles.otherItem}>
          <View style={styles.container10}>
            <Image source={require('./img/car_svgrepo.com.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>My Vehicles</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  others: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 20,
  },
  otherItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  container10: {
    // Define styles for container10 if needed
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default Others;
