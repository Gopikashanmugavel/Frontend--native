import React from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import Header from './components/Header';
import Services from './components/Services';
import FastagRecharge from './components/FastagRecharge';
import Money from './components/Money';
import Others from './components/Others';
import Deals from './components/Deals';
import Travel from './components/Travel';
import PremiumPlans from './components/PremiumPlans';
import RechargeAndBillPayments from './components/RechargeAndBillPayments';
import RechargeNow from './components/RechargeNow';
import Cars from './components/Cars';
import Trending from './components/Trending';
import ExclusiveOffers from './components/ExclusiveOffers';
import HowItWorks from './components/HowItWorks';

const App = () => {
  const recharge = () => {
    Alert.alert('Recharge initiated!');
  };

  const addMoney = () => {
    Alert.alert('Add money to wallet process started!');
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.spacing} />
      <Services />
      <View style={styles.spacing} />
      <FastagRecharge recharge={recharge} />
      <View style={styles.spacing} />
      <Money addMoney={addMoney} />
      <View style={styles.spacing} />
      <Others />
      <View style={styles.spacing} />
      <Deals />
      <View style={styles.spacing} />
      <Travel />
      <View style={styles.spacing} />
      <PremiumPlans />
      <View style={styles.spacing} />
      <RechargeAndBillPayments />
      <View style={styles.spacing} />
      <RechargeNow />
      <View style={styles.spacing} />
      <Cars />
      <View style={styles.spacing} />
      <Trending />
      <View style={styles.spacing} />
      <ExclusiveOffers />
      <View style={styles.spacing} />
      <HowItWorks />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  spacing: {
    marginVertical: 8,
  },
});

export default App;
