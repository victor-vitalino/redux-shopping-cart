import React from "react";
import { View,Image,Text, StyleSheet} from "react-native";
import Constants from "expo-constants";



// import { Container } from './styles';

const AppBar = ({text,logo}) => {
  return (
    <View style={styles.appBar}>
      <Image style={styles.logo} source={logo} />

      <Text style={styles.AppTitle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    AppTitle: {
      fontSize: 20,
      fontFamily: "Ubuntu_700Bold",
    },
    appBar: {
      paddingTop: 10 + Constants.statusBarHeight,
      width: "100%",
      height: 60 + Constants.statusBarHeight,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2ecc71",
    },
    logo: {
        paddingRight: 50,
        height: 50,
        width: 50,
      },
});
export default AppBar;
