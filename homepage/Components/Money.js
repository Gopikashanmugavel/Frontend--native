import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Money = ({ addMoney }) => (
  <View style={styles.money}>
    <Image source={require('./img/Rectangle 20.png')} style={styles.image} />
    <View style={styles.money2}>
      <View style={styles.wallet}>
        <Text style={styles.whiteText}>Add money to wallet</Text>
        <Text style={styles.grayText}>Get 2% cashback</Text>
        <TouchableOpacity style={styles.button} onPress={addMoney}>
          <Text style={styles.buttonText}>Add Money</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('./img/Frame.png')} style={styles.smallImage} />
    </View>
    <Image source={require('./img/Group 436.png')} style={styles.groupImage} />
  </View>
);

const styles = StyleSheet.create({
  money: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    marginRight: 5,
    marginLeft: 25,
    width: 350,
    height: 180,
  },
  money2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -100, // Adjust to overlap the top image
  },
  wallet: {
    backgroundColor: '#3ea175',
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
  },
  whiteText: {
    color: 'white',
    fontSize: 15,
  },
  grayText: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#3ea175',
    fontWeight: 'bold',
  },
  smallImage: {
    height: 100,
    width: 100,
    margin: 25,
  },
  groupImage: {
    marginLeft: 170,
    marginTop: 20,
  },
});

export default Money;
