import { View, Text, Image } from 'react-native';
import React from 'react';
import mainImg from '../../assets/images/main.png';

import styles from './styles';
import Button from '../../components/Button';

export default function SignIn() {
  return (
    <View>
      <Image source={mainImg} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Education App</Text>
        <Text style={styles.login}>Login</Text>
        <Button title='Sign In with Google' icon={'google'} />
      </View>
    </View>
  );
}
