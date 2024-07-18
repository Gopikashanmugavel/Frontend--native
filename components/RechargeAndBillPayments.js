import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RechargeAndBillPayments = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Recharge & Bill Payments</Text>
    <View style={styles.itemsContainer}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={require('./img/barrier-and-car-svgrepo-com 6.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Fastag Recharge</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('./img/essential-mobile-smartphone-svgrepo-com 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Mobile Recharge</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('./img/electricity-svgrepo-com 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Electricity</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('./img/water-null-water-tap-water-valve-svgrepo-com 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Water</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={require('./img/gas-tank-icon 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Gas Cylinder</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('./img/hand-money-svgrepo-com 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Loan Payment</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('./img/ground-satelite-dish-svgrepo-com 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>DTH</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('./img/house-rent-svgrepo-com 1.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>House Rent</Text>
        </View>
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
    marginBottom: 10,
  },
  itemsContainer: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default RechargeAndBillPayments;
