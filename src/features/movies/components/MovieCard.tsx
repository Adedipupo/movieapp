import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export const MovieInfoCard = () => {
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        style={styles.cover}
        source={{ uri: "https://picsum.photos/600" }}
      />
      <Card.Content style={styles.cardcontent}>
        <Title>Movie title</Title>
        <Paragraph>By : Ooooqqq</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    backgroundColor: '#fff'
  },
  cover: {
    padding: 5,
  },
  cardcontent: {
    marginTop: 5,
    marginBottom: -5,
  },
});
