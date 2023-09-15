import { View, Text, TextInput } from "react-native";
import React from "react";

interface ISearchBar {
  searchText: string;
  handleSearch: (text: string) => void;
}
export default function SearchBar({ searchText, handleSearch }: ISearchBar) {
  return (
    <TextInput
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
      }}
      clearButtonMode="always"
      placeholder="Search by product name"
      onChangeText={(text) => handleSearch(text)}
      value={searchText}
    />
  );
}
