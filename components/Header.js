import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={require('./assets/Ellipse 1.png')}
        style={styles.profilePic}
        resizeMode="cover"
      />
      <View style={styles.headerInfo}>
        <Image source={require('./assets/Group 1831.png')} />
        <View style={styles.notifications}>
          <Image source={require('./assets/Group 1832.png')} />
          <Image source={require('./assets/Vector (1).png')} />
          <Image source={require('./assets/share_svgrepo.com.png')} />
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    marginHorizontal: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5, // for Android shadow
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3ea175',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifications: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default Header;
