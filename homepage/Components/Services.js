import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Services = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Services</Text>
    <View style={styles.box}>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/location-pin-map_svgrepo.com-1.png')} style={styles.icon} />
        </View>
        <Text style={styles.para}>Nearby Parking</Text>
      </View>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/electric-car-illustration-1_svgrepo.com-1.png')} style={styles.icon} />
        </View>
        <Text style={styles.para}>EV Parking</Text>
      </View>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/Group (2).svg')} style={styles.icon} />
        </View>
        <Text style={styles.para}>Car Service</Text>
      </View>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/car_svgrepo.com-1.svg')} style={styles.icon} />
        </View>
        <Text style={styles.para}>Vehicle Insurance</Text>
      </View>
    </View>
    <View style={styles.box}>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/crane-truck_svgrepo.com (1).svg')} style={styles.icon} />
        </View>
        <Text style={styles.para}>Roadside Assistance</Text>
      </View>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/ticket_svgrepo.com-1.svg')} style={[styles.icon, { margin: 10 }]} />
        </View>
        <Text style={styles.para}>Pay Online</Text>
      </View>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/Group 447-1.svg')} style={styles.icon} />
        </View>
        <Text style={styles.para}>Toll Estimation</Text>
      </View>
      <View style={styles.service}>
        <View style={styles.container3}>
          <Image source={require('./img/Group 418-1.svg')} style={styles.icon} />
        </View>
        <Text style={styles.para}>Valet Parking</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 16,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  service: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container3: {
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  para: {
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Services;
