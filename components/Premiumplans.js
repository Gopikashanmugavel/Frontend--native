import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PremiumPlans = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Premium Plans</Text>
    <View style={styles.plansContainer}>
      <View style={styles.plan}>
        <Image
          source={require('./img/Rectangle 21 (1).png')}
          style={styles.planImage}
        />
        <View style={styles.planDetails}>
          <Text style={styles.planTitle}>Monthly Parking</Text>
          <Text>Dedicated Parking available near you.</Text>
          <TouchableOpacity style={styles.planButton}>
            <Text style={styles.buttonText}>Explore Now</Text>
            <Image
              source={require('./img/arrow_right_alt (1).png')}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('./img/Group 465 (1).png')}
          style={styles.planIcon}
        />
      </View>
      <View style={styles.plan}>
        <Image
          source={require('./img/Frame 275.png')}
          style={[styles.planImage, { marginLeft: 20 }]}
        />
        <View style={[styles.planDetails, { marginLeft: 20 }]}>
          <Text style={styles.planTitle}>Elite Car Wash</Text>
          <Text>Elite Car rooming at your doorstep.</Text>
          <TouchableOpacity style={styles.planButton}>
            <Text style={styles.buttonText}>Explore Now</Text>
            <Image
              source={require('./img/arrow_right_alt (1).png')}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
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
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  plansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  planImage: {
    height: 120,
    width: 180,
  },
  planDetails: {
    marginLeft: 10,
    flex: 1,
  },
  planTitle: {
    color: 'yellow',
    fontWeight: 'bold',
  },
  planButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#3ea175', // Assuming this color is used for buttons
    marginRight: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  planIcon: {
    height: 55,
    width: 70,
    marginTop: 50,
    marginRight: 5,
  },
});

export default PremiumPlans;
