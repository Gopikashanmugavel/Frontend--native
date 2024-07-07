import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RechargeNow = ({ addMoney }) => (
  <View style={styles.container}>
    <View style={styles.money}>
      <Image source={require('./img/Rectangle 21 (1).png')} style={styles.image} />
      <View style={styles.money2}>
        <View style={styles.wallet}>
          <Text style={styles.discount}>Get 15% off on</Text>
          <Text style={styles.title}>FASTag Recharge</Text>
          <Text style={styles.subtitle}>Pay Using Axis Bank Credit & Debit Cards</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Recharge Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('./img/Group 1.png')} style={styles.axisLogo} />
      </View>
    </View>
    <Image source={require('./img/Group 556.png')} style={styles.banner} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
    marginLeft: 10,
  },
  wallet: {
    marginTop: 5,
  },
  discount: {
    color: 'yellow',
    fontSize: 14,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 8,
    marginTop: 2,
  },
  button: {
    backgroundColor: 'white',
    width: 120,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  axisLogo: {
    height: 18,
    width: 70,
    marginTop: 100,
    marginRight: 40,
  },
  banner: {
    height: 140,
    width: 223,
  },
});

export default RechargeNow;
