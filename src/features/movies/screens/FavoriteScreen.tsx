import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function FavoritesScreen() {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("movies");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  (async () => {
    const resp = await getData();
    console.log(resp);
  })();

  return (
    <View style={{ flex: 1 }}>
      <Text>favourites!</Text>

      <View>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Card elevation={5} style={styles.card}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
                style={styles.image}
                resizeMode="cover"
              />
              <Card.Content style={styles.cardcontent}>
                <Title>{item.title}</Title>
                <Paragraph>{item.release_date}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
      </View>
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
  card: {
    flex: 1,
    height: 200,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 5,
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
});
