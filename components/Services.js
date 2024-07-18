import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Services = () => (
  <View style={styles.container}>
    <View style={styles.services}>
      <Text style={styles.headerText}>Services</Text>
      <View>
        <View style={styles.box}>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/location-pin-map_svgrepo.com.svg')} style={styles.image} />
            </View>
            <Text style={styles.para}>Nearby Parking</Text>
          </View>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/electric-car-illustration-1_svgrepo.com-1.png')} style={styles.image} />
            </View>
            <Text style={styles.para}>EV Parking</Text>
          </View>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/Group (2).svg')} style={styles.image} />
            </View>
            <Text style={styles.para}>Car Service</Text>
          </View>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/car_svgrepo.com-1.svg')} style={styles.image} />
            </View>
            <Text style={styles.para}>Vehicle Insurance</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/crane-truck_svgrepo.com (1).svg')} style={styles.image} />
            </View>
            <Text style={styles.para}>Roadside Assistance</Text>
          </View>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/ticket_svgrepo.com-1.svg')} style={[styles.image, { margin: 10 }]} />
            </View>
            <Text style={styles.para}>Pay Online</Text>
          </View>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/Group 447-1.svg')} style={styles.image} />
            </View>
            <Text style={styles.para}>Toll Estimation</Text>
          </View>
          <View style={styles.service}>
            <View style={styles.imageContainer}>
              <Image source={require('./assets/Group 418-1.svg')} style={styles.image} />
            </View>
            <Text style={styles.para}>Valet Parking</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  services: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // For iOS use shadow properties and for Android use elevation
    elevation: 5, // Shadow for Android
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  service: {
    alignItems: 'center',
    margin: 8,
  },
  imageContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  para: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Services;
