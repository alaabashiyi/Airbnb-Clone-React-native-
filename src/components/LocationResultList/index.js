import React from 'react';
import {View, Text, FlatList} from 'react-native';
import LocationResultItem from '../LocationResultItem';

const LocationResultList = (props) => {
  const {searchResults} = props;
  return (
    <>
      <FlatList
        data={searchResults}
        renderItem={({item}) => <LocationResultItem result={item} />}
      />
    </>
  );
};

export default LocationResultList;
