import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigations/RootNavigator";
import { ProductProvider } from "./src/store/product/ProductContext";
import { CartProvider } from "./src/store/cart/CartContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FONTS from "./assets/fonts";

import Compose from "./src/utils/Compose";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Compose components={[ProductProvider, CartProvider]}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <RootNavigator />
        </View>
      </SafeAreaProvider>
    </Compose>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
