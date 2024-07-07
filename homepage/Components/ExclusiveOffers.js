import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ExclusiveOffers = () => (
  <View style={styles.container}>
    <View style={styles.travel}>
      <Text style={styles.title}>Exclusive Offers</Text>
      <View style={styles.travelItems}>
        <View style={styles.travelItem}>
          <Image source={require('./img/redeem.svg')} style={styles.icon} />
          <Text style={styles.text}>Pay Challans</Text>
        </View>
        <View style={styles.travelItem}>
          <Image source={require('./img/discount-promo-ecommerce_svgrepo.com.svg')} style={styles.icon} />
          <Text style={styles.text}>Crime Reporter</Text>
        </View>
        <View style={styles.travelItem}>
          <Image source={require('./img/loudspeaker-6_svgrepo.com.svg')} style={styles.icon} />
          <Text style={styles.text}>RTO Center</Text>
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
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  travelItems: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 10,
  },
  travelItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
  },
});

export default ExclusiveOffers;
