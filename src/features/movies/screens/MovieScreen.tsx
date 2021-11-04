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
          <View>
            <Text style={styles.titleOne}>Overview</Text>
            <Text style={styles.title}>{movie.overview}</Text>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
},
movieTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato"
},
titleOne: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato"
},
title: {
    marginTop: 20,
    fontSize: 16
}
});
