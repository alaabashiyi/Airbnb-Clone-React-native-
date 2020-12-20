import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const LocationResultItem = (props) => {
  const navigation = useNavigation();
  const {result} = props;
  return (
    <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={30} color={'#000'} />
      </View>
      <Text style={styles.locationText}>{result.description}</Text>
    </Pressable>
  );
};

export default LocationResultItem;
