import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../constants/Color";

interface IPriceSort {
  handleSortByPrice: (asc: boolean) => void;
}
const PriceSort = ({ handleSortByPrice }: IPriceSort) => {
  return (
    <View>
      <Text>Sort by Price</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => handleSortByPrice(false)}>
          <Ionicons
            style={{ marginRight: 5, opacity: 0.5 }}
            name="arrow-up-circle-outline"
            size={24}
            color={Color.BLACK}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSortByPrice(true)}>
          <Ionicons
            style={{ marginRight: 5, opacity: 0.5 }}
            name="arrow-down-circle-outline"
            size={24}
            color={Color.BLACK}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceSort;
