import React from 'react';

const Header = () => (
  <div className="container">
    <header className="header">
      <img src="img/Ellipse 1.png" alt="Profile" className="profile-pic" />
      <div className="header-info">
        <img src="img/Group 1831.png" alt="" />
        <div className="notifications">
          <img src="img/Group 1832.png" alt="" />
          <img src="img/Vector (1).png" alt="" />
          <img src="img/share_svgrepo.com.png" alt="" />
        </div>
      </div>
    </header>
  </div>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Note: boxShadow isn't supported in React Native
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3ea175',
    color: '#ffffff', // Note: `color` is used for text; not applicable for View components
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
  vehicle: {
    fontSize: 18,
  },
  notifications: {
    flexDirection: 'row',
    padding: 10, // Note: gap isn't supported in React Native, use margin or padding instead
  },
});


export default Header;