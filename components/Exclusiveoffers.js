import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ExclusiveOffers = () => (
  <View style={styles.container}>
    <View style={styles.travel}>
      <Text style={styles.headerText}>Exclusive Offers</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/redeem.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Pay Challans</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/discount-promo-ecommerce_svgrepo.com.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Crime Reporter</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./img/loudspeaker-6_svgrepo.com.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>RTO Center</Text>
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
    marginLeft: 25,
  },
});

export default ExclusiveOffers;
