import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Fontisto } from "@expo/vector-icons";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const TabContainer = createBottomTabNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <TabContainer.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let IconColor = focused ? "#2ecc71" : "black";
            if (route.name === "Home") {
              return (
                <Fontisto name="shopping-store" size={24} color={IconColor} />
              );
            } else {
              return (
                <AntDesign name="shoppingcart" size={24} color={IconColor} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#2ecc71",
          inactiveTintColor: "black",
        }}
      >
        <TabContainer.Screen name="Home" component={Home} />
        <TabContainer.Screen name="Cart" component={Cart} />
      </TabContainer.Navigator>
    </NavigationContainer>
  );
};

export default routes;
