import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { ListingScreen } from "@screens";
export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ListingScreen />
      </View>
    </PaperProvider>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    height,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});
