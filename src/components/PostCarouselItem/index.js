import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const PostCarouselItem = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();
  const GoToPostPage = () => navigation.navigate('Post', {postId: post.id});

  return (
    <Pressable
      onPress={GoToPostPage}
      style={[
        styles.container,
        {
          width: width - 30,
        },
      ]}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {post.type}, {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
