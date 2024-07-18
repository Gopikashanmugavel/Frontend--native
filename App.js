import React from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import Header from './components/Header';
import Services from './components/Services';
import FastagRecharge from './components/FastagRecharge';
import Money from './components/Money';
import Others from './components/Others';
import Deals from './components/Deals';
import Travel from './components/Travel';
import PremiumPlans from './components/Premiumplans';
import RechargeAndBillPayments from './components/RechargeAndBillPayments';
import RechargeNow from './components/RechargeNow'; 
import Cars from './components/Cars';
import Trending from './components/Trending';
import ExclusiveOffers from './components/Exclusiveoffers';
import HowItWorks from './components/HowItWorks';

const App = () => {
  const recharge = () => {
    Alert.alert('Recharge initiated!');
  };

  const addMoney = () => {
    Alert.alert('Add money to wallet process started!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Services />
      <FastagRecharge recharge={recharge} />
      <Money addMoney={addMoney} />
      <Others />
      <Deals />
      <Travel />
      <PremiumPlans />
      <RechargeAndBillPayments />
      <RechargeNow />
      <Cars />
      <Trending />
      <ExclusiveOffers />
      <HowItWorks />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
