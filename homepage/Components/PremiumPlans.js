import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PremiumPlans = () => (
  <View style={styles.container}>
    <View style={styles.premiumPlans}>
      <Text style={styles.heading}>Premium Plans</Text>
      <View style={styles.plansContainer}>
        <View style={styles.plan}>
          <Image source={require('./img/Rectangle 21 (1).png')} style={styles.image} />
          <View style={styles.planDetails}>
            <Text style={styles.planTitle}>Monthly Parking</Text>
            <Text>Dedicated Parking available near you.</Text>
            <TouchableOpacity style={styles.planButton}>
              <Text style={styles.buttonText}>Explore Now</Text>
              <Image source={require('./img/arrow_right_alt (1).png')} style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
          <Image source={require('./img/Group 465 (1).png')} style={styles.smallImage} />
        </View>
        <View style={styles.plan}>
          <Image source={require('./img/Frame 275.png')} style={[styles.image, { marginLeft: 20 }]} />
          <View style={styles.planDetails}>
            <Text style={styles.planTitle}>Elite Car Wash</Text>
            <Text>Elite Car rooming at your doorstep.</Text>
            <TouchableOpacity style={styles.planButton}>
              <Text style={styles.buttonText}>Explore Now</Text>
              <Image source={require('./img/arrow_right_alt (1).png')} style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
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
  premiumPlans: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  plansContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    height: 120,
    width: 180,
  },
  smallImage: {
    height: 55,
    width: 70,
    marginTop: 50,
    marginRight: 5,
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
    backgroundColor: '#3ea175',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginRight: 5,
  },
  buttonIcon: {
    height: 12,
    width: 12,
    tintColor: 'white',
  },
});

export default PremiumPlans;
