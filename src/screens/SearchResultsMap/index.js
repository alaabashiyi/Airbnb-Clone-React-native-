import React, {useState, useEffect, useRef} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/feed';
import {FlatList} from 'react-native-gesture-handler';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();

  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  const onViewChange = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) return;
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.3,
      longitudeDelta: 0.3,
    };

    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        // provider={PROVIDER_GOOGLE}
        ref={map}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
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
          ref={flatlist}
          data={places}
          horizontal
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChange.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
