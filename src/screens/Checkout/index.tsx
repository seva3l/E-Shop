import React, { useEffect, useContext, useMemo, useState } from "react";
import { FlatList, View, TouchableOpacity, Text, Modal } from "react-native";
import Card from "./components/Card";
import styles from "./_styles";
import Color from "../../constants/Color";
import { CartContext } from "../../store/cart/CartContext";
import ICart from "../../interface/Cart";
import { useNavigation } from "@react-navigation/native";

export default function Checkout() {
  const [total, setTotal] = useState<number>(0);
  const { cart, isModalVisible, clearCart, getTotalPrice } =
    useContext(CartContext);

  useEffect(() => {
    setTotal(getTotalPrice());
  }, [cart]);

  const navigation = useNavigation();

  useEffect(() => {
    if (isModalVisible) {
      navigation.setOptions({
        headerShown: false,
      });
    }
  }, [isModalVisible]);

  const _onCheckOut = () => {
    clearCart(true);
    setTimeout(() => {
      navigation.goBack();
    }, 2000);
  };

  const _onClearCart = () => {
    clearCart(false);
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: ICart }) => <Card {...item} />;

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContentWrapper}>
            <Text style={styles.modalText}>Thank you for purchasing</Text>
          </View>
        </View>
      </Modal>
      {!isModalVisible && (
        <>
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
            style={styles.clearCartButton}
          >
            <Text style={styles.clearCartButtonText}>Clear Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_onCheckOut}
            disabled={cart.length === 0 ? true : false}
            style={[
              styles.checkoutButton,
              {
                backgroundColor: cart.length === 0 ? Color.GRAY : Color.PRIMARY,
              },
            ]}
          >
            <Text style={styles.totalPrice}>₱ {total.toLocaleString()}</Text>
            <Text style={styles.checkoutLabel}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
