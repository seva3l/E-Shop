import React, { useEffect, useContext, useState } from "react";
import { FlatList, View, TouchableOpacity, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "./components/Card";
import styles from "./_styles";
import Color from "../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import {
  ProductContext,
  ICategories,
} from "../../store/product/ProductContext";
import { CartContext } from "../../store/cart/CartContext";
import DropDownPicker from "react-native-dropdown-picker";
import SearchBar from "./components/SearchBar";
import PriceSort from "./components/PriceSort";

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
}

export default function HomeScreen() {
  const {
    products,
    fetchProducts,
    searchProductsByName,
    sortProductsByUnitPrice,
    categories,
    filterProductsByCategory,
  } = useContext(ProductContext);
  const { cart, fetchCart, addToCart, isModalVisible } =
    useContext(CartContext);

  const [searchText, setSearchText] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [items, setItems] = useState<ICategories[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  useEffect(() => {
    setItems(categories);
  }, [categories]);

  const handleSearch = (text: string) => {
    searchProductsByName(text);
    setSearchText(text);
  };

  useEffect(() => {
    filterProductsByCategory(category);
  }, [category]);

  const handleSortByPrice = (asc: boolean) => {
    sortProductsByUnitPrice(asc);
  };
  const renderItem = ({ item }: { item: IProduct }) => (
    <Card {...item} addToCart={() => addToCart(item, true)} />
  );

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContentWrapper}>
            <Text style={{ color: Color.WHITE }}>Item added to cart!</Text>
          </View>
        </View>
      </Modal>
      <SearchBar searchText={searchText} handleSearch={handleSearch} />
      <DropDownPicker
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setItems}
      />
      <PriceSort handleSortByPrice={handleSortByPrice} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.1}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {cart.length !== 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={styles.checkout}
        >
          <Ionicons
            style={{ opacity: 0.5 }}
            name="cart-outline"
            size={24}
            color={Color.BLACK}
          />
          <Text style={styles.checkoutText}>{cart.length}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
