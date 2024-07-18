import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Trending = () => (
  <View style={styles.container}>
    <View style={styles.trending}>
      <Text style={styles.headerText}>Trending</Text>
      <View style={styles.trendingItems}>
        <Image
          source={require('./img/Group 487.svg')}
          style={styles.mainImage}
        />
        <Image
          source={require('./img/Save.svg')}
          style={[styles.overlayImage, { top: '20%', left: '15%' }]}
        />
        <Image
          source={require('./img/rupee-sign_svgrepo.com.svg')}
          style={[styles.overlayImage, { top: '20%', left: '25%' }]}
        />
        <Image
          source={require('./img/500.svg')}
          style={[styles.overlayImage, { top: '20%', left: '32%' }]}
        />
        <Image
          source={require('./img/On Your First EV Parking.svg')}
          style={[styles.overlayImage, { top: '30%', left: '32%' }]}
        />
        <Image
          source={require('./img/We provide dedicated monthly parking with surveillance.svg')}
          style={[styles.overlayImage, { top: '43%', left: '30%' }]}
        />
        <Image
          source={require('./img/Group 489.svg')}
          style={[styles.overlayImage, { top: '70%', left: '67%' }]}
        />
        <Image
          source={require('./img/100+.svg')}
          style={[styles.overlayImage, { top: '68%', left: '80%' }]}
        />
        <Image
          source={require('./img/Happy Customers.svg')}
          style={[styles.overlayImage, { top: '75%', left: '84%' }]}
        />
        <Image
          source={require('./img/Group 488.svg')}
          style={[styles.overlayImage, { top: '85%', left: '45%' }]}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  trending: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.1, // Shadow for iOS
    shadowRadius: 10, // Shadow for iOS
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  trendingItems: {
    position: 'relative',
    alignItems: 'center',
  },
  mainImage: {
    width: 358,
    height: 'auto',
    borderRadius: 8,
  },
  overlayImage: {
    position: 'absolute',
    maxWidth: 60,
    height: 'auto',
    transform: [{ translate: ['-50%', '-50%'] }],
    zIndex: 1,
  },
});

export default Trending;
