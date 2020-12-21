import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import LocationResultItem from '../../components/LocationResultItem';

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyBuoaIddbqOYEMqCPlheDlCCQU737yiPYw',
          language: 'en',
          type: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <LocationResultItem result={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
