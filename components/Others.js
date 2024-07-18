import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Others = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Others</Text>
    <View style={styles.itemsContainer}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./img/Group 470-1.svg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.itemText}>Rentout Helmet</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./img/Group 471-1.svg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.itemText}>Fuel Price</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./img/shop-bag_svgrepo.com.svg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.itemText}>Shop</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./img/car_svgrepo.com.svg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.itemText}>My Vehicles</Text>
      </View>
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
    marginLeft: 20,
    marginBottom: 10,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Others;
