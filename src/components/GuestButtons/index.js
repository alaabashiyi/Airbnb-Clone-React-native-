import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestButton = (props) => {
  const {title1, title2, data, setData} = props;
  return (
    <View style={styles.row}>
      <View>
        <Text style={{fontWeight: 'bold'}}>{title1}</Text>
        <Text style={{color: '#8d8d8d'}}>{title2}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => setData(Math.max(0, data - 1))}
          style={styles.button}>
          <Text style={{fontSize: 20, color: '#5d5d5d'}}>-</Text>
        </Pressable>

        <Text style={{marginHorizontal: 20, fontSize: 16}}>{data}</Text>
        <Pressable onPress={() => setData(data + 1)} style={styles.button}>
          <Text style={{fontSize: 20, color: '#5d5d5d'}}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestButton;
