import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import styles from './styles';

import { FontAwesome } from '@expo/vector-icons';

type IProps = TouchableOpacityProps & {
  title: string;
  icon?: any;
};
export default function Button({ title, icon, ...rest }: IProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      {icon && (
        <FontAwesome style={styles.icon} name={icon} size={24} color='black' />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
