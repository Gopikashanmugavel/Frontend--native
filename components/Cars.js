import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cars = () => (
  <View style={styles.container}>
    <View style={styles.travel}>
      <Text style={styles.headerText}>Your Car's Center</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/Group.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Car Wash</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/Group 464-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Estimate Toll</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/shop-bag_svgrepo.com.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Shop</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/traffic-light_svgrepo.com-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Protocols</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  travel: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.1, // Shadow for iOS
    shadowRadius: 10, // Shadow for iOS
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  travelItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  iconContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Cars;
