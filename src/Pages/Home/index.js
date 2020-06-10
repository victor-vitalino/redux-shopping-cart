import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { darken } from "polished";
import Logo from "../../assets/skateboard.png";

import AppBar from "../../components/AppBar";

import api from "../../Services/api";

// actions
import * as CartActions from "../../store/modules/cart/actions";

// import { Container } from './styles';

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const { amount } = props;

  useEffect(() => {
    handleProducts();
  }, []);

  handleProducts = async () => {
    const response = await api.get("/products");
    const data = response.data.map((item) => ({
      ...item,
      priceFormmated: `${item.price} R$`,
    }));
    setProducts(data);
  };

  const addProductToCart = (product) => {
    const { addToCart } = props;
    addToCart(product);
  };

  return (
    <>
      <AppBar text="Skate Shop" logo={Logo} />

      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Image style={styles.productImage} source={{ uri: item.image }} />

              <View>
                <Text style={styles.price}>{item.priceFormmated}</Text>
              </View>

              <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={0.5}
                onPress={() => {
                  addProductToCart(item);
                }}
              >
                <View style={styles.buttonContainer}>
                  <View style={styles.IconContainer}>
                    <FontAwesome name="cart-plus" size={24} color="black" />
                    <Text style={{ paddingLeft: 5, fontSize: 20 }}>
                      {amount[item.id] || 0}
                    </Text>
                  </View>
                  <Text style={styles.title}>Adicionar ao carrinho</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,

    margin: 20,
  },
  productImage: {
    width: 200,
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Ubuntu_700Bold",
    paddingTop: 15,
    paddingBottom: 15,
  },
  buttonContainer: {
    marginTop: 10,

    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "#2ecc71",
    width: 334,
    height: 60,
    marginBottom: 1,
    borderRadius: 5,
  },
  price: {
    paddingTop: 10,
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
  },
  IconContainer: {
    backgroundColor: darken(0.2, "#2ecc71"),
    flexDirection: "row",
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
    borderRadius: 5,
  },
});

const mapDispatchToprops = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

const MapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(MapStateToProps, mapDispatchToprops)(Home);
