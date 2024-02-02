// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// // import axios from 'axios';

// const CargoScreen = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     // Fetch country data from the REST Countries API
//     const fetchCountryData = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         setCountries(response.data);
//       } catch (error) {
//         console.error('Error fetching country data:', error);
//       }
//     };

//     fetchCountryData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map}>
//         {countries.map((country, index) => (
//           <Marker
//             key={index}
//             coordinate={{
//               latitude: country.latlng[0],
//               longitude: country.latlng[1],
//             }}
//             title={country.name.common}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default CargoScreen;
