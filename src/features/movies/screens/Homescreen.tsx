import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";
import useMovies from "../../../services/useMovies";
import { MovieInfoCard } from "../components/MovieCard";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const HomeScreen = ({ navigation }) => {
  const { data, isLoading, isSuccess } = useMovies();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search Movies" />
      </View>
      <View>
        {isLoading && (
          <React.Fragment>
            <Text>Loading...</Text>
          </React.Fragment>
        )}

        {isSuccess && (
          <>
            <Text>all posts</Text>
            <FlatList
              data={data?.results}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("Movie", { movie: item })
                  }
                >
                  <Card elevation={5} style={styles.card}>
                    <Card.Cover
                      style={styles.cover}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                      }}
                    />
                    <Card.Content style={styles.cardcontent}>
                      <Title>{item.title}</Title>
                      <Paragraph>{item.release_date}</Paragraph>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    backgroundColor: "#fff",
  },
  cover: {
    padding: 5,
  },
  cardcontent: {
    marginTop: 5,
    marginBottom: -5,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  search: {
    padding: 10,
  },
});
