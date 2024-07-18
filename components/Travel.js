import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Travel = () => (
  <View style={styles.container}>
    <View style={styles.travel}>
      <Text style={styles.headerText}>Gonna Travel?</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image
              source={require('./assets/Group.svg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.itemText}>Car Wash</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image
              source={require('./assets/Group 464-1.svg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.itemText}>Estimate Toll</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image
              source={require('./assets/shop-bag_svgrepo.com.svg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.itemText}>Shop</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image
              source={require('./assets/traffic-light_svgrepo.com-1.svg')}
              style={styles.image}
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
  },
  itemsContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 10,
  },
  travelItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  container5: {
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
    marginTop: 5,
  },
});

export default Travel;
