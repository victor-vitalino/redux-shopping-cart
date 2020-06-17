import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text} from "react-native";

import { AntDesign } from "@expo/vector-icons";

// import { Container } from './styles';

const IconWithBadge = ({ IconColor }) => {

  const cartSize = useSelector(state => state.cart.length);
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <AntDesign name="shoppingcart" size={24} color={IconColor} />
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
          {cartSize || 0}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default IconWithBadge;
