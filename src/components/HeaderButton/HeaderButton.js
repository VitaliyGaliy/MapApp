import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default ({
  Icon, text, name, handler, isActive,
}) => (
  <TouchableHighlight
      style={{ flex: 1 }}
      onPress={handler}
    >
      <View style={[styles.button,
        isActive === text ? { backgroundColor: 'red' }
          : { backgroundColor: 'white' }]}
      >
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
    </TouchableHighlight>
);
