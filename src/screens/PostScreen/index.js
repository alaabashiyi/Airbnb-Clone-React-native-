import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import GuestButton from '../../components/GuestButtons';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailedPost from '../../components/DetailedPost';

import places from '../../../assets/data/feed';

const PostScreen = (props) => {
  const route = useRoute();
  const postId = route.params.postId;

  const post = places.find((place) => place.id === postId);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
