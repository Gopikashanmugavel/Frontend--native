import React from 'react';
import { ScrollView, View, Text, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ParkQwikHomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./img/Ellipse 1.png')} style={styles.profilePic} />
        <View style={styles.headerInfo}>
          <Image source={require('./img/Group 1831.png')} />
          <View style={styles.notifications}>
            <Image source={require('./img/Group 1832.png')} />
            <Image source={require('./img/Vector (1).png')} />
            <Image source={require('./img/share_svgrepo.com.png')} />
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/location-pin-map_svgrepo.com-1.png')} />
              </View>
              <Text style={styles.para}>Nearby Parking</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/electric-car-illustration-1_svgrepo.com-1.png')} />
              </View>
              <Text style={styles.para}>EV Parking</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/Group (2).svg')} />
              </View>
              <Text style={styles.para}>Car Service</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/car_svgrepo.com-1.svg')} />
              </View>
              <Text style={styles.para}>Vehicle Insurance</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/crane-truck_svgrepo.com (1).svg')} />
              </View>
              <Text style={styles.para}>Roadside Assistance</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/ticket_svgrepo.com-1.svg')} />
              </View>
              <Text style={styles.para}>Pay Online</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/Group 447-1.svg')} />
              </View>
              <Text style={styles.para}>Toll Estimation</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/Group 418-1.svg')} />
              </View>
              <Text style={styles.para}>Valet Parking</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container4}>
        <Text style={styles.sectionTitle}>FASTag Recharge</Text>
        <Text style={styles.subText}>Get up to 100% cashback on first 3 Fastag Recharges</Text>
        <View style={styles.rechargeInput}>
          <TextInput style={styles.input} placeholder="Add vehicle or chassis no." />
          <Button title="Recharge" onPress={() => Alert.alert('Recharge initiated!')} />
        </View>
        <View style={styles.poweredBy}>
          <Text>Powered by</Text>
          <Image source={require('./img/national-electronic-toll-collection-netc-logo-vector_svgrepo.com-1.png')} style={styles.poweredByImage} />
          <Image source={require('./img/bharat-billpay-seeklogo.com_svgrepo.com.png')} style={styles.poweredByImage} />
        </View>
      </View>
    <View style={styles.container2}>
      <Text style={styles.title}>Discover</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.discoverItem}>
          <View style={styles.imageContainer}>
            <Image source={require('./img/shop-bag_svgrepo.com-1.svg')} style={styles.image} />
          </View>
          <Text style={styles.itemText}>Buy FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.imageContainer}>
            <Image source={require('./img/published_with_changes-1.svg')} style={styles.image} />
          </View>
          <Text style={styles.itemText}>Recharge FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.imageContainer}>
            <Image source={require('./img/done_all-1.svg')} style={styles.image} />
          </View>
          <Text style={styles.itemText}>FASTag History</Text>
        </View>
        <View style={styles.discoverItem}>
          <View style={styles.imageContainer}>
            <Image source={require('./img/scan_delete-1.svg')} style={styles.image} />
          </View>
          <Text style={styles.itemText}>Close FASTag</Text>
        </View>
      </View>
    </View>
      <View style={styles.container6}>
        <Text style={styles.sectionTitle}>Others</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/Group 470-1.svg')} />
              </View>
              <Text style={styles.para}>Rentout Helmet</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/Group 471-1.svg')} />
              </View>
              <Text style={styles.para}>Fuel Price</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/shop-bag_svgrepo.com.svg')} />
              </View>
              <Text style={styles.para}>Shop</Text>
            </View>
            <View style={styles.service}>
              <View style={styles.container3}>
                <Image source={require('./img/car_svgrepo.com.svg')} />
              </View>
              <Text style={styles.para}>My Vehicles</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.deals}>
        <Text style={styles.sectionTitle}>Deals For You</Text>
        <Image source={require('./img/Group 1869.png')} style={styles.dealsImage} />
      </View>

      <View style={styles.container7}>
        <Text style={styles.sectionTitle}>Gonna Travel?</Text>
        <View style={styles.boxContainer}>
          <View style={styles.travelItem}>
            <View style={styles.container5}>
              <Image source={require('./img/Group.svg')} style={styles.travelImage} />
            </View>
            <Text style={styles.para}>Car Wash</Text>
          </View>
          <View style={styles.travelItem}>
            <View style={styles.container5}>
              <Image source={require('./img/Group 464-1.svg')} style={styles.travelImage} />
            </View>
            <Text style={styles.para}>Estimate Toll</Text>
          </View>
          <View style={styles.travelItem}>
            <View style={styles.container5}>
              <Image source={require('./img/shop-bag_svgrepo.com.svg')} style={styles.travelImage} />
            </View>
            <Text style={styles.para}>Shop</Text>
          </View>
          <View style={styles.travelItem}>
            <View style={styles.container5}>
              <Image source={require('./img/traffic-light_svgrepo.com-1.svg')} style={styles.travelImage} />
            </View>
            <Text style={styles.para}>Protocols</Text>
          </View>
        </View>
      </View>

      <View style={styles.premiumPlans}>
        <Text style={styles.sectionTitle}>Premium Plans</Text>
        <View style={styles.boxContainer}>
          <View style={styles.plan}>
            <Image source={require('./img/Rectangle 21 (1).png')} style={styles.planImage} />
            <View style={styles.plan2}>
              <View>
                <Text style={styles.planTitle}>Monthly Parking</Text>
                <Text style={styles.planText}>Dedicated Parking available near you.</Text>
                <Button title="Explore Now" onPress={() => Alert.alert('Explore Monthly Parking')} />
              </View>
              <Image source={require('./img/Group 465 (1).png')} style={styles.planIcon} />
            </View>
          </View>
          <View style={styles.plan}>
            <Image source={require('./img/Frame 275.png')} style={styles.planImage} />
            <View style={styles.plan2}>
              <View>
                <Text style={styles.planTitle}>Elite Car Wash</Text>
                <Text style={styles.planText}>Elite Car rooming at your doorstep.</Text>
                <Button title="Explore Now" onPress={() => Alert.alert('Explore Elite Car Wash')} />
              </View>
              <Image source={require('./img/Group 465 (1).png')} style={styles.planIcon} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container8}>
        <Text style={styles.sectionTitle}>Recharge & Bill Payments</Text>
        <View style={styles.boxContainer}>
          <View style={styles.rechargeItem}>
            <View style={styles.container5}>
              <Image source={require('./img/barrier-and-car-svgrepo-com 6.png')} style={styles.rechargeImage} />
            </View>
            <Text style={styles.para}>Fastag Recharge</Text>
          </View>
          <View style={styles.rechargeItem}>
            <View style={styles.container5}>
              <Image source={require('./img/essential-mobile-smartphone-svgrepo-com 1.png')} style={styles.rechargeImage} />
            </View>
            <Text style={styles.para}>Mobile REcharge</Text>
          </View>
          <View style={styles.rechargeItem}>
            <View style={styles.container5}>
              <Image source={require('./img/electricity-svgrepo-com 1.png')} style={styles.rechargeImage} />
            </View>
            <Text style={styles.para}>Electricity</Text>
          </View>
          <View style={styles.rechargeItem}>
            <View style={styles.container5}>
              <Image source={require('./img/water-null-water-tap-water-valve-svgrepo-com 1.png')} style={styles.rechargeImage} />
            </View>
            <Text style={styles.para}>water</Text>
          </View>
          <View style={styles.rechargeNow}>
          <View style={styles.container5}>
             <Image source={require('./img/water-null-water-tap-water-valve-svgrepo-com 1.png')} style={styles.rechargeNowImage} />
          </View>
          <Text style={styles.para}>water</Text>
          </View>
          </View>
          </View>

      <View style={styles.exclusiveOffers}>
        <Text style={styles.sectionTitle}>Exclusive Offers</Text>
        <View style={styles.boxContainer}>
          <View style={styles.exclusiveItem}>
            <View style={styles.container5}>
              <Image source={require('./img/redeem-1.svg')} style={styles.exclusiveImage} />
            </View>
            <Text style={styles.para}>Rawards</Text>
          </View>
          <View style={styles.exclusiveItem}>
            <View style={styles.container5}>
              <Image source={require('./img/discount-promo-ecommerce_svgrepo.com-1.svg')} style={styles.exclusiveImage} />
            </View>
            <Text style={styles.para}>Discount</Text>
          </View>
          <View style={styles.exclusiveItem}>
            <View style={styles.container5}>
              <Image source={require('./img/loudspeaker-6_svgrepo.com.svg')} style={styles.exclusiveImage} />
            </View>
            <Text style={styles.para}>Reffers & Win</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body:{
    fontfamily:'Arial',
    margin: 0,
    padding: 0,
},
container: {
  flexGrow: 1,
  backgroundColor: '#E5E5E5',
},
container1: {
  width: '200%',
  maxWidth: '400px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  position: 'relative',
},

container2: {
  margin: '0 auto',
  paddingTop: 0,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
},

container4: {
  margin: '0 auto',
  padding: 0,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  alignItems: 'center',
},

container3: {
  backgroundColor: '#ffffff',
  height: 31,
  width: 51,
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(245, 237, 237, 0.959)',
  borderRadius: 10,
},

container5: {
    backgroundColor: '#F0FFFA',
    height: 41,
    width: 51,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: 'rgba(245, 237, 237, 0.959)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 1, // for Android
  },
  container6: {
    margin: 'auto',
    paddingTop: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1, // for Android
  },
container7: {
    width: 358,
    height: 165,
    margin: 'auto',
    paddingTop: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1, // for Android
  },
  container8: {
    width: 358,
    height: 275,
    margin: 'auto',
    paddingTop: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1, // for Android
  },
container9: {
    backgroundColor: '#F0FFFA',
    height: 41,
    width: 51,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: 'rgba(245, 237, 237, 0.959)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 10,
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1, // for Android
  },
  para: {
    fontSize: 13,
  },

header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3ea175',
    color: '#ffffff',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25, // radius is half of width or height for a circle effect
    marginRight: 15,
  },

headerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  vehicle: {
    fontSize: 18,
  },
  notifications: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
  },
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  fastagRecharge: {
    padding: 10,
  },
  discover: {
    padding: 10,
  },
  others: {
    padding: 10,
  },
  deals: {
    padding: 10,
  },
  travel: {
    padding: 10,
  },
  premiumPlans: {
    padding: 10,
  },
  rechargeBill: {
    padding: 10,
  },
  offers: {
    padding: 10,
  },
  carCenter: {
    padding: 10,
  },
  trending: {
    padding: 10,
  },
  exclusiveOffers: {
    padding: 10,
  },
  howItWorks: {
    padding: 10,
  },
  wallet: {
    padding: 5,
    width: 160,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 250,
    height: 100,
  },
discover1: {
    paddingRight: 20,
  },
  money: {
    position: 'relative',
  },
  money2: {
    position: 'absolute',
    top: 5,
    left: 10,
    flexDirection: 'row',
    marginLeft: 20,
  },
  service: {
    marginRight: 5,
    marginTop: 8,
  },
  h2: {
    marginTop: 0,
    fontSize: 20,
    color: '#333',
  },
  serviceGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  discoverGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  othersGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  dealsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  travelGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  premiumGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  rechargeBillGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  offersGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  carCenterGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  exclusiveOffersGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  serviceItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  discoverItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  otherItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  dealItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  travelItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  premiumItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  rechargeItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  offerItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  carCenterItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },
  exclusiveOfferItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    flexBasis: '45%',
    marginBottom: 10,
  },

fastagRechargeInput: {
    width: 245,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#F0FFFA',
    fontSize: 12,
    borderColor: '#3ea175',
    borderWidth: 1,
  },
  button: {
    width: 150,
    padding: 10,
    margin: 10,
    height: 40,
    backgroundColor: '#3ea175',
    color: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  planButton: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3ea175',
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  plan: {
    position: 'relative',
    marginLeft: 5,
  },
  plan2: {
    position: 'absolute',
    top: 5,
    left: 10,
    fontSize: 12,
  },
/* General Styles for the section */
howItWorks: {
    textAlign: 'left',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  one: {
    height: 17,
    width: 220,
    left: '15%',
  },
  howItWorksItem: {
    position: 'relative',
    display: 'inline-block',
    marginTop: 20,
    flexDirection: 'row',
  },
  firstImg: {
    maxWidth: 358,
    height: 170,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // For Android shadow
  },
  secondImg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    maxWidth: '50%',
    height: 'auto',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    zIndex: 1,
    elevation: 4, // For Android shadow
  },
  thirdImg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    maxWidth: '20%',
    height: 24,
    zIndex: 2,
  },
/* General Styles for the section */
trending: {
  textAlign: 'left',
  padding: 20,
  backgroundColor: '#ffffff',
},
trendingTitle: {
  fontSize: 32, // Equivalent to 2em
  marginBottom: 20,
  color: '#333',
},
trendingItem: {
  position: 'relative',
  width: '100%',
  maxWidth: 600, // Adjust as needed
  marginHorizontal: 'auto',
},

/* Style for the first image */
trendingitemfirst:{
   width: 358,
    height: 'auto',
    display: 'block', // 'display' is not used in React Native
    borderRadius: 8,
  },
/* Style for the second image with overlay effect */
trendingitemsecond: {
    position: 'absolute',
    top: '20%', // Adjust as needed
    left: '15%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
  },
trendingitemthrid: {
    position: 'absolute',
    top: '20%', // Adjust as needed
    left: '25%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
trendingitemfourth: {
    position: 'absolute',
    top: '20%', // Adjust as needed
    left: '32%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
trendingitemfifth:{
   position: 'absolute',
    top: '30%', // Adjust as needed
    left:'32%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},

trendingitemsixth:{
    position: 'absolute',
    top: '43%', // Adjust as needed
    left:'30%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
trendingitemseven: {
    position: 'absolute',
    top: '70%', // Adjust as needed
    left:'69%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
trendingitemeigth: {
    position: 'absolute',
    top: '68%', // Adjust as needed
    left:'80%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
trendingitemnine: {
    position: 'absolute',
    top: '75%', // Adjust as needed
    left:'84%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
trendingitemten: {
    position: 'absolute',
    top: '86%', // Adjust as needed
    left:'45%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Adjust as needed
    maxWidth: '60%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
},
/* General Styles for the section */
offersContainer: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  offersTitle: {
    fontSize: 32, // 2em equivalent in React Native
    marginBottom: 20,
    color: '#333',
  },
  offersItem: {
    position: 'relative',
    width: '100%',
    maxWidth: 600, // Adjust this value as needed
    marginHorizontal: 'auto',
  },
  firstImage: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
  },
  secondImage: {
    position: 'absolute',
    top: '25%', // Adjust as needed
    left: '45%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    maxWidth: '80%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
  },
  thirdImage: {
    position: 'absolute',
    top: '50%', // Adjust as needed
    left: '45%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    maxWidth: '80%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
  },
  fourthImage: {
    position: 'absolute',
    top: '70%', // Adjust as needed
    left: '35%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    maxWidth: '80%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
  },
  fifthImage: {
    position: 'absolute',
    top: '70%', // Adjust as needed
    left: '65%', // Adjust as needed
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    maxWidth: '80%', // Adjust as needed
    height: 'auto',
    zIndex: 1,
  },

});

export default ParkQwikHomePage;