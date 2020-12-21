import React, {useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/feed';
import {FlatList} from 'react-native-gesture-handler';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const width = useWindowDimensions().width;
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 32.864117,
          longitude: 35.192877,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          data={places}
          horizontal
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <PostCarouselItem post={item} />}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
