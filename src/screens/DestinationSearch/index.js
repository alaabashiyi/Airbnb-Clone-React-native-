import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './styles';

import searchResults from '../../../assets/data/search';
import LocationResultList from '../../components/LocationResultList';

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <LocationResultList searchResults={searchResults} />
    </View>
  );
};

export default DestinationSearchScreen;
