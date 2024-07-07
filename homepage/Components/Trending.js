import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Trending = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Trending</Text>
    <View style={styles.trendingItem}>
      <Image source={require('./img/Group 487.svg')} style={styles.image} />
      <Image source={require('./img/Save.svg')} style={[styles.icon, { top: '20%', left: '15%' }]} />
      <Image source={require('./img/rupee-sign_svgrepo.com.svg')} style={[styles.icon, { top: '20%', left: '25%' }]} />
      <Image source={require('./img/500.svg')} style={[styles.icon, { top: '20%', left: '32%' }]} />
      <Image source={require('./img/On Your First EV Parking.svg')} style={[styles.icon, { top: '30%', left: '32%' }]} />
      <Image source={require('./img/We provide dedicated monthly parking with surveillance.svg')} style={[styles.icon, { top: '43%', left: '30%' }]} />
      <Image source={require('./img/Group 489.svg')} style={[styles.icon, { top: '70%', left: '67%' }]} />
      <Image source={require('./img/100+.svg')} style={[styles.icon, { top: '68%', left: '80%' }]} />
      <Image source={require('./img/Happy Customers.svg')} style={[styles.icon, { top: '75%', left: '84%' }]} />
      <Image source={require('./img/Group 488.svg')} style={[styles.icon, { top: '85%', left: '45%' }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  trendingItem: {
    position: 'relative',
  },
  image: {
    width: 358,
    height: 'auto',
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    maxWidth: 60,
    height: 'auto',
    transform: [{ translate: ['-50%', '-50%'] }],
    zIndex: 1,
  },
});

export default Trending;
