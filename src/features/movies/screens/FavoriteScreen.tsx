import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export function FavoritesScreen() {
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>favourites!</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: "#edf2fb",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    opacity: 0.7,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  header: {
    alignItems: "center",
  },
});
