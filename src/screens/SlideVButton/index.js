import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SlideButton = () => {
  const navigation = useNavigation();

  const handleSlide = () => {
    // Navigate to the next screen or perform any action when the button is slid
    navigation.navigate('NextScreen');
  };

  return (
    <TouchableOpacity onPress={handleSlide} style={styles.slideButtonContainer}>
      <View style={styles.slideButton}>
        <Text style={styles.slideButtonText}>Slide to Open</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slideButtonContainer: {
    alignItems: 'center',
  },
  slideButton: {
    backgroundColor: '#3498db', // Button background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  slideButtonText: {
    color: '#fff', // Text color
    fontWeight: 'bold',
  },
});

export default SlideButton;