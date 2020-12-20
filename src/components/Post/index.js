import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = (props) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {post.type}, {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} Total</Text>
    </View>
  );
};

export default Post;
