import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RechargeNow = ({ addMoney }) => (
  <View style={styles.container}>
    <View style={styles.money}>
      <Image
        source={require('./img/Rectangle 21 (1).png')}
        style={styles.image}
      />
      <View style={styles.money2}>
        <View style={styles.wallet}>
          <Text style={styles.discountText}>Get 15% off on</Text>
          <Text style={styles.title}>FASTag Recharge</Text>
          <Text style={styles.subtitle}>Pay Using Axis Bank Credit & Debit Cards</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Recharge Now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('./img/Group 1.png')}
          style={styles.bankLogo}
        />
      </View>
    </View>
    <Image
      source={require('./img/Group 556.png')}
      style={styles.secondaryImage}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  money: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 5,
    marginLeft: 25,
    width: 260,
    height: 140,
  },
  money2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wallet: {
    marginLeft: 10,
  },
  discountText: {
    color: 'yellow',
    fontSize: 14,
    marginTop: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    height: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 8,
    marginTop: 2,
    height: 10,
  },
  button: {
    backgroundColor: 'white',
    width: 120,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bankLogo: {
    height: 18,
    width: 70,
    marginTop: 100,
    marginRight: 40,
  },
  secondaryImage: {
    height: 140,
    width: 223,
  },
});

export default RechargeNow;
