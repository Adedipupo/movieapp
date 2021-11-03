import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet} from "react-native";
import { Searchbar } from "react-native-paper";
import { MovieInfoCard } from "../components/MovieCard";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search Movies" />
      </View>
      <View>
        <MovieInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 10,
  },
});

