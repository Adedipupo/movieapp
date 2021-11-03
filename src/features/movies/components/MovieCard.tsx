import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export const MovieInfoCard = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
