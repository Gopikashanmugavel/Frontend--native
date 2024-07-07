import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RechargeAndBillPayments = () => (
  <View style={styles.container}>
    <View style={styles.rechargeBill}>
      <Text style={styles.heading}>Recharge & Bill Payments</Text>
      <View>
        <View style={styles.row}>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/barrier-and-car-svgrepo-com 6.png')} style={styles.icon} />
            <Text style={styles.label}>Fastag Recharge</Text>
          </View>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/essential-mobile-smartphone-svgrepo-com 1.png')} style={styles.icon} />
            <Text style={styles.label}>Mobile Recharge</Text>
          </View>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/electricity-svgrepo-com 1.png')} style={styles.icon} />
            <Text style={styles.label}>Electricity</Text>
          </View>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/water-null-water-tap-water-valve-svgrepo-com 1.png')} style={styles.icon} />
            <Text style={styles.label}>Water</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/gas-tank-icon 1.png')} style={styles.icon} />
            <Text style={styles.label}>Gas Cylinder</Text>
          </View>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/hand-money-svgrepo-com 1.png')} style={styles.icon} />
            <Text style={styles.label}>Loan Payment</Text>
          </View>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/ground-satelite-dish-svgrepo-com 1.png')} style={styles.icon} />
            <Text style={styles.label}>DTH</Text>
          </View>
          <View style={styles.rechargeItem}>
            <Image source={require('./img/house-rent-svgrepo-com 1.png')} style={styles.icon} />
            <Text style={styles.label}>House Rent</Text>
          </View>
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
  rechargeBill: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  rechargeItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default RechargeAndBillPayments;
