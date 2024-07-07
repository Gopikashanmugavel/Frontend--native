import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require('./img/Ellipse 1.png')} style={styles.profilePic} />
      <View style={styles.headerInfo}>
        <Image source={require('./img/Group 1831.png')} style={styles.headerImage} />
        <View style={styles.notifications}>
          <Image source={require('./img/Group 1832.png')} style={styles.notificationIcon} />
          <Image source={require('./img/Vector (1).png')} style={styles.notificationIcon} />
          <Image source={require('./img/share_svgrepo.com.png')} style={styles.notificationIcon} />
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
  },
  headerImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  notifications: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    resizeMode: 'contain',
  },
});

export default Header;
