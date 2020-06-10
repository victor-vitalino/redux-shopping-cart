import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text} from "react-native";

import { AntDesign } from "@expo/vector-icons";

// import { Container } from './styles';

const IconWithBadge = ({ cartSize, IconColor }) => {
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

const MapStateToProps = state => ({
  cartSize: state.cart.length,
})
export default connect (MapStateToProps)(IconWithBadge);
