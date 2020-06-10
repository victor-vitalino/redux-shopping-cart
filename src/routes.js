import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

import IconWithBadge from './components/Badge'

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
                <IconWithBadge IconColor={IconColor}/>
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
