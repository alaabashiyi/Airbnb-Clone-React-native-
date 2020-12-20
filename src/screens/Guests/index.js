import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import GuestButton from '../../components/GuestButtons';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  return (
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
  );
};

export default GuestScreen;
