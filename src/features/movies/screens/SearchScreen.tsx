import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import CarouselCards from "../../../components/CarouselCards";
import useSearch from "../../../services/searchMovies";

export function SearchScreen() {
  const { data, isLoading, isSuccess } = useSearch();
  const [search, setSearch] = React.useState("");
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <Searchbar
        placeholder="Search your favorite movies here"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <View>
        {/* <CarouselCards /> */}
      </View>
    </View>
  );
}
