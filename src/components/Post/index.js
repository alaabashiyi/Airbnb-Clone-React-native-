import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://www.channelnewsasia.com/image/12661872/4x3/600/450/6fa39e9b609766dbc7291f8daf7666c6/Of/onefinestay-june-st-barts-.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.desc} numberOfLines={2}>
        Entire flat, lorem aspectm lorem aspectm lorem aspectm lorem aspectm
        lorem aspectm lorem aspectm lorem aspectm lorem aspectm
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>$230 Total</Text>
    </View>
  );
};

export default Post;
