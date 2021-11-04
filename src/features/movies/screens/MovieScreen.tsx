import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import useMovies from "../../../services/useMovies";

export const MovieScreen = ({ route }) => {
  const { movie } = route && route.params;
  const { data, isSuccess, isLoading } = useMovies(movie.id);

  return (
    <ScrollView style={styles.container}>
      <Text>{movie.title}</Text>

      {isLoading && <Text style={{ textAlign: "center" }}>Loading...</Text>}

      {isSuccess && (
        <>
          <Card elevation={5}>
            <Card.Cover
              source={{ uri: "https://picsum.photos/600" }}
            />
            <Card.Content>
              <Title>Movie title</Title>
              <Paragraph>By : Ooooqqq</Paragraph>
            </Card.Content>
          </Card>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
