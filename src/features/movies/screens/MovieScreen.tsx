import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import useMovies from "../../../services/useMovies";

export const MovieScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card elevation={5}>
        <Card.Cover
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
        />
        <Card.Content>
          <Title style={styles.movieTitle}>{movie.title}</Title>
          <Paragraph style={styles.para}>{movie.release_date}</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.overview}>
        <Text style={styles.titleOne}>Overview</Text>
        <Text style={styles.title}>{movie.overview}</Text>
      </View>
      <View style={styles.voteaverage}>
        <Text style={styles.titleOnee}>Vote Average:</Text>
        <Text style={styles.title1}>{movie.vote_average}</Text>
      </View>
      <View style={styles.votecount}>
        <Text style={styles.titleOnee}>Vote Count:</Text>
        <Text style={styles.title1}>{movie.vote_count}</Text>
      </View>
      <View style={styles.language}>
        <Text style={styles.titleOnee}>Language:</Text>
        <Text style={styles.title1}>{movie.original_language}</Text>
      </View>
      <View style={styles.popularity}>
        <Text style={styles.titleOnee}>Popularity:</Text>
        <Text style={styles.title1}>{movie.popularity}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  movieTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  },
  overview: {
    marginBottom: 20,
  },
  titleOne: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  },
  titleOnee: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "tomato",
  },
  title: {
    marginTop: 20,
    fontSize: 16,
  },
});
