import "./src/config/ReactotronConfig";

import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";

// redux
import { Provider } from "react-redux";
import store from './src/store';


// impportando as fontes
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import Routes from "./src/routes";

export default function App() {
  // carregando as fontes
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Provider>
  );
}
