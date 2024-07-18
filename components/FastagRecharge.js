import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const FastagRecharge = ({ recharge }) => (
  <View style={styles.container}>
    <View style={styles.fastagRecharge}>
      <Text style={styles.headerText}>FASTag Recharge</Text>
      <Text style={styles.subText}>Get up to 100% cashback on first 3 Fastag Recharges</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add vehicle or chassis no."
        />
        <Button title="Recharge" onPress={recharge} />
      </View>
      <View style={styles.poweredBy}>
        <Text>Powered by</Text>
        <Image
          source={require('./assets/national-electronic-toll-collection-netc-logo-vector_svgrepo.com.png')}
          style={styles.logo}
        />
        <Image
          source={require('./assets/bharat-billpay-seeklogo.com_svgrepo.com.png')}
          style={styles.logo}
        />
      </View>
    </View>
    <View style={styles.divider} />
    <View style={styles.discover}>
      <Text style={styles.discoverHeader}>Discover</Text>
      <View style={styles.discoverItems}>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/shop-bag_svgrepo.com-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.discoverText}>Buy FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/published_with_changes-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.discoverText}>Recharge FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/done_all-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.discoverText}>FASTag History</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/scan_delete-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.discoverText}>Close FASTag</Text>
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
  fastagRecharge: {
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
  },
  subText: {
    fontSize: 14,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  poweredBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  discover: {
    marginBottom: 20,
  },
  discoverHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  discoverItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  discoverItem: {
    alignItems: 'center',
    margin: 8,
  },
  iconContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  discoverText: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default FastagRecharge;
