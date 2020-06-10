import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Constants from "expo-constants";

// import { Container } from './styles';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 10 + Constants.statusBarHeight,
    padding: 32,
  }
})

export default Cart;