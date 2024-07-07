import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const FastagRecharge = ({ recharge }) => (
  <View style={styles.container}>
    <View style={styles.fastagRecharge}>
      <Text style={styles.heading}>FASTag Recharge</Text>
      <Text style={styles.subheading}>Get upto 100% cashback on first 3 Fastag Recharges</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add vehicle or chassis no." />
        <Button title="Recharge" onPress={recharge} />
      </View>
      <View style={styles.poweredBy}>
        <Text>Powered by</Text>
        <Image source={require('./img/national-electronic-toll-collection-netc-logo-vector_svgrepo.com-1.png')} style={styles.logo} />
        <Image source={require('./img/bharat-billpay-seeklogo.com_svgrepo.com.png')} style={styles.logo} />
      </View>
    </View>
    <View style={styles.hr} />
    <View style={styles.discover}>
      <Text style={styles.discoverHeading}>Discover</Text>
      <View style={styles.discoverItems}>
        <View style={styles.discoverItem}>
          <Image source={require('./img/shop-bag_svgrepo.com-1.svg')} style={styles.discoverIcon} />
          <Text style={styles.discoverText}>Buy FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <Image source={require('./img/published_with_changes-1.svg')} style={styles.discoverIcon} />
          <Text style={styles.discoverText}>Recharge FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <Image source={require('./img/done_all-1.svg')} style={styles.discoverIcon} />
          <Text style={styles.discoverText}>FASTag History</Text>
        </View>
        <View style={styles.discoverItem}>
          <Image source={require('./img/scan_delete-1.svg')} style={styles.discoverIcon} />
          <Text style={styles.discoverText}>Close FASTag</Text>
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
  fastagRecharge: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 14,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  poweredBy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 8,
  },
  logo: {
    marginLeft: 15,
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 16,
  },
  discover: {
    marginBottom: 16,
  },
  discoverHeading: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  discoverItems: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 8,
  },
  discoverItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  discoverIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  discoverText: {
    fontSize: 10,
    marginTop: 5,
  },
});

export default FastagRecharge;
