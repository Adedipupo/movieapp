import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet} from "react-native";
import { Searchbar } from "react-native-paper";
import useMovies from "../../../services/services";
import { MovieInfoCard } from "../components/MovieCard";

export const HomeScreen = () => {
    const { data, isLoading, isSuccess } = useMovies();
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
    backgroundColor: 'transparent'
  },
  search: {
    padding: 10,
  },
});

