import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Discover = () => {
  return (
    <View style={styles.discover}>
      <Text style={styles.headerText}>Discover</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/shop-bag_svgrepo.com-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Buy FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/published_with_changes-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Recharge FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/done_all-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>FASTag History</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('./assets/scan_delete-1.svg')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Close FASTag</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemsContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  discoverItem: {
    alignItems: 'center',
    marginRight: 15,
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
  itemText: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default Discover;
