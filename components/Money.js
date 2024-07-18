import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Money = ({ addMoney }) => (
  <View style={styles.container}>
    <Image 
      source={require('./img/Rectangle 20.svg')} 
      style={styles.mainImage} 
    />
    <View style={styles.moneyDetails}>
      <View style={styles.wallet}>
        <Text style={styles.walletText}>Add money to wallet</Text>
        <Text style={styles.cashbackText}>Get 2% cashback</Text>
        <Button
          title="Add Money"
          onPress={addMoney}
          color="#3ea175"
        />
      </View>
      <Image 
        source={require('./img/Frame.png')} 
        style={styles.frameImage} 
      />
    </View>
    <Image 
      source={require('./img/Group 436.png')} 
      style={styles.bottomImage} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  mainImage: {
    marginHorizontal: 25,
    width: 350,
    height: 180,
  },
  moneyDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  wallet: {
    flex: 1,
  },
  walletText: {
    color: 'white',
    fontSize: 15,
  },
  cashbackText: {
    color: 'white',
    fontSize: 12,
  },
  frameImage: {
    height: 100,
    width: 100,
    margin: 25,
  },
  bottomImage: {
    marginLeft: 170,
    marginTop: 20,
  },
});

export default Money;
