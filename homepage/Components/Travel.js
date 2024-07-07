import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Travel = () => (
  <View style={styles.container}>
    <View style={styles.travel}>
      <Text style={styles.heading}>Gonna Travel?</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image source={require('./img/Group.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Car Wash</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image source={require('./img/Group 464-1.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Estimate Toll</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image source={require('./img/shop-bag_svgrepo.com.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Shop</Text>
        </View>
        <View style={styles.travelItem}>
          <View style={styles.container5}>
            <Image source={require('./img/traffic-light_svgrepo.com-1.svg')} style={styles.icon} />
          </View>
          <Text style={styles.itemText}>Protocols</Text>
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
  travel: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: 10,
  },
  travelItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  container5: {
    // Define styles for container5 if needed
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Adjust as per your image requirements
  },
  itemText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default Travel;
