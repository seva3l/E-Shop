import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PrimaryImage from "../../../components/atom/PrimaryImage";
import globalStyless from "../../../global/globalStyles";
import { CardProps } from "../index";
import Color from "../../../constants/Color";
import { Ionicons } from "@expo/vector-icons";

interface IProduct extends CardProps {
  addToCart: () => void;
}
export default function Card({
  id,
  productName,
  description,
  unitPrice,
  imageUrl,
  category,
  addToCart,
}: IProduct) {
  return (
    <View style={styles.card}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>#{category}</Text>
      </View>

      <PrimaryImage source={{ uri: imageUrl }} style={styles.image} />
      <Text style={[globalStyless.TextBold, styles.productName]}>
        {productName}
      </Text>
      <Text style={[globalStyless.title, { color: Color.PRIMARY }]}>
        ₱ {unitPrice.toLocaleString()}
      </Text>
      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Ionicons name="cart-outline" size={24} color={Color.WHITE} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productName: {
    minHeight: 50,
    fontSize: 14,
    textAlign: "center",
    color: "#101F43",
  },
  card: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    padding: 15,
    backgroundColor: "#FAFAFA",
    borderRadius: 5,
    elevation: 2,
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
    paddingBottom: 10,
    width: "100%",
    flex: 1, // Expand to fill available space horizontally
    justifyContent: "flex-start", // Align the content to the end (bottom) of the container
    alignItems: "flex-start", // Align the content to the end (right) of the container
  },
  categoryText: {
    ...globalStyless.label, // Use your existing label styles
    opacity: 0.7,
  },
});
