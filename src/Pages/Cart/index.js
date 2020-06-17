import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as CartActions from "../../store/modules/cart/actions";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

// import { Container } from './styles';
import AppBar from "../../components/AppBar";
import { darken } from "polished";

import Buy from "../../assets/buy.png";

const Cart = () => {
  // dados redux - CART
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: Number((product.price * product.amount).toFixed(2)),
    }))
  );

  // dados redux - preço total
  const totalPrice = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return Number((total + product.price * product.amount).toFixed(2));
    }, 0)
  );

  const handlePlusCart = (product) => {
    useDispatch(CartActions.updateCart(product.id, product.amount + 1));
  };
  const handleMinusCart = (product) => {
    useDispatch(CartActions.updateCart(product.id, product.amount - 1));
  };

  return (
    <>
      <AppBar text="Carrinho" logo={Buy} />
      <View style={styles.container}>
        {totalPrice === 0 ? (
          <View style={styles.emptyCart}>
            <MaterialCommunityIcons name="cart-off" size={70} color="grey" />
            <Text style={styles.emptyCartText}>
              Não existem produtos no carrinho
            </Text>
          </View>
        ) : (
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <View style={styles.headerContainer}>
                  <Image
                    style={styles.productImage}
                    source={{ uri: item.image }}
                  />
                  <Text style={{ flex: 1 }}>{item.title}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      useDispatch(CartActions.removeFromCart(item.id))
                    }
                  >
                    <Entypo
                      name="trash"
                      size={35}
                      color="#2ecc71"
                      style={{ paddingRight: 10 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.infoProduct}>
                  <View style={styles.amountView}>
                    <TouchableOpacity onPress={() => handleMinusCart(item)}>
                      <AntDesign
                        name="minuscircleo"
                        size={24}
                        color="#2ecc71"
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                    >
                      {item.amount}
                    </Text>
                    <TouchableOpacity onPress={() => handlePlusCart(item)}>
                      <AntDesign name="pluscircleo" size={24} color="#2ecc71" />
                    </TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: 20, paddingRight: 20 }}>
                    {item.subtotal} R$
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <View style={styles.finishContainer}>
        <Text style={styles.finishTitle}>TOTAL</Text>
        <Text style={styles.finishPrice}>{totalPrice}</Text>
        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishTextButton}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 10,
  },
  productContainer: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,

    marginBottom: 5,
    marginTop: 5,
    paddingTop: 5,
    borderRadius: 5,
  },
  productImage: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: "row",
  },
  infoProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 10,
    height: 50,
    backgroundColor: darken(0.1, "#eee"),
  },
  amountView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  finishContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#fff",
    marginBottom: 5,
    borderRadius: 5,
  },
  finishTitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Ubuntu_700Bold",
    paddingTop: 15,
    paddingBottom: 5,
    color: "grey",
  },
  finishPrice: {
    textAlign: "center",
    fontSize: 50,
    fontFamily: "Ubuntu_700Bold",
    paddingTop: 6,
    paddingBottom: 6,
  },
  finishButton: {
    backgroundColor: "#2ecc71",
    width: "100%",
    borderRadius: 5,
    borderColor: darken(0.2, "#2ecc71"),
    borderBottomWidth: 1,
  },
  finishTextButton: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Ubuntu_700Bold",
    paddingTop: 15,
    paddingBottom: 15,
    color: "#fff",
  },
  emptyCart: {
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  emptyCartText: {
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
    color: "grey",
  },
});

export default Cart;
