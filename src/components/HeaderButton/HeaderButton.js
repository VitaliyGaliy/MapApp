import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default ({ Icon, text, name }) => (
  <View style={[styles.button]}>
    {Icon && (
      <Icon
        style={styles.itemIcon}
        name={name}
        size={14}
        color="#900"
      />
    )}
    {text && <Text style={styles.text}>{text}</Text>}
  </View>
);
