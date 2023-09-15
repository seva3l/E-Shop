import React, { useEffect, useContext, useState, useRef } from "react";
import { FlatList, View, TouchableOpacity, Text, Modal } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Card from "./components/Card";
import styles from "./_styles";
import Color from "../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import { ProductContext } from "../../store/product/ProductContext";
import { CartContext } from "../../store/cart/CartContext";
import DropDownPicker from "react-native-dropdown-picker";
import SearchBar from "../../components/atom/SearchBar";
import PriceSort from "../../components/atom/PriceSort";
import IProduct from "../../interface/Product";

export default function HomeScreen() {
  const {
    products,
    fetchProducts,
    searchProductsByName,
    sortProductsByUnitPrice,
    categories,
    filterProductsByCategory,
    setCategories,
  } = useContext(ProductContext);
  const { cart, fetchCart, addToCart, isModalVisible } =
    useContext(CartContext);

  const [searchText, setSearchText] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const flatListRef = useRef<FlatList | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  const handleSearch = (text: string) => {
    searchProductsByName(text);
    setSearchText(text);
    scrollToTop();
  };

  function scrollToTop() {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }

  useEffect(() => {
    filterProductsByCategory(category);
    scrollToTop();
  }, [category]);

  const handleSortByPrice = (asc: boolean) => {
    sortProductsByUnitPrice(asc);
    scrollToTop();
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
        items={categories}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setCategories}
      />
      <PriceSort handleSortByPrice={handleSortByPrice} />
      {products.length !== 0 ? (
        <FlatList
          ref={(ref) => (flatListRef.current = ref)}
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.1}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.productNotFoundContainer}>
          <Text>Product not found!</Text>
        </View>
      )}
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
