import React, { useEffect, useContext, useMemo, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "./components/Card";
import styles from "./_styles";
import items from "../../../items.json";
import Color from "../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../../store/cart/CartContext";
import ICart from "../../interface/Cart";
import { useNavigation } from "@react-navigation/native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
}

export default function Checkout() {
  const { cart, addToCart, isModalVisible, clearCart, getTotalPrice } =
    useContext(CartContext);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(getTotalPrice());
  }, [cart]);

  const navigation = useNavigation();

  const _onCheckOut = () => {
    clearCart();
    setTimeout(() => {
      navigation.goBack();
    }, 2000); // Adjust the time as needed
  };

  const _onClearCart = () => {
    clearCart(false);
    navigation.goBack();
  };
  const renderItem = ({ item }: { item: ICart }) => <Card {...item} />;
  const formattedTotal = total.toLocaleString();
  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 300, // Set the height as desired
          }}
        >
          <View
            style={{
              backgroundColor: Color.PRIMARY,
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: Color.WHITE, fontSize: 24, fontWeight: "bold" }}
            >
              Thank you for purchasing
            </Text>
          </View>
        </View>
      </Modal>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.item.id}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={_onClearCart}
        disabled={cart.length === 0 ? true : false}
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          backgroundColor: Color.RED,
          marginBottom: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: Color.WHITE, fontSize: 16, fontWeight: "400" }}>
          Clear Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_onCheckOut}
        disabled={cart.length === 0 ? true : false}
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          backgroundColor: cart.length === 0 ? Color.GRAY : Color.PRIMARY,
          marginBottom: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: Color.WHITE, fontSize: 18, fontWeight: "bold" }}>
          ₱ {formattedTotal}
        </Text>
        <Text style={{ color: Color.WHITE, fontSize: 16, fontWeight: "400" }}>
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
