import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import PrimaryImage from "../../../components/atom/PrimaryImage";
import globalStyless from "../../../global/globalStyles";
import ICart from "../../../interface/Cart";
import Color from "../../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../../../store/cart/CartContext";

interface ICard extends ICart {}
export default function Card({ item, quantity }: ICard) {
  const { removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const handleIncrement = () => {
    updateCartItemQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity !== 1) {
      updateCartItemQuantity(item.id, quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <PrimaryImage source={{ uri: item.imageUrl }} style={styles.image} />
        </View>

        <View style={styles.rightContainer}>
          <Text style={[globalStyless.title, { color: Color.PRIMARY }]}>
            ₱ {item.unitPrice.toLocaleString()}
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={handleDecrement}>
              <Ionicons
                name="remove-circle-outline"
                size={24}
                color={Color.PRIMARY}
              />
            </TouchableOpacity>
            <Text style={[globalStyless.TextBold, styles.quantity]}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color={Color.PRIMARY}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={[globalStyless.TextBold, styles.productName]}>
          {item.productName}
        </Text>
        <Text style={styles.categoryText}>#{item.category}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={[globalStyless.TextBold, styles.totalText]}>
          Total: ₱ {(item.unitPrice * quantity).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftContainer: {},
  productName: {
    fontSize: 14,
    textAlign: "center",
    color: "#101F43",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#101F43",
  },
  rightContainer: {
    gap: 10,
  },
  container: {
    flex: 1,
    margin: 5,
    padding: 20,
    borderRadius: 5,
    elevation: 2,
    gap: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  totalContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    textAlign: "center",
    color: "#101F43",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  button: {
    marginTop: 15,
    backgroundColor: Color.PRIMARY,
    borderColor: Color.PRIMARY,
    borderWidth: 1,
    width: "100%",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: Color.PRIMARY,
  },
  categoryContainer: {
    gap: 10,
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  categoryText: {
    opacity: 0.7,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
});
