import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import GuestButton from '../../components/GuestButtons';
import {useNavigation} from '@react-navigation/native';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <GuestButton
          title1={'Adults'}
          title2={'Ages 13 or above'}
          data={adults}
          setData={setAdults}
        />
        <GuestButton
          title1={'Children'}
          title2={'Ages 2 - 12'}
          data={children}
          setData={setChildren}
        />
        <GuestButton
          title1={'Infants'}
          title2={'Under 2'}
          data={infant}
          setData={setInfant}
        />
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
