import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import useMovies from "../../../services/useMovies";
import { Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";


const screen = Dimensions.get('screen');

export const HomeScreen = ({ navigation }) => {
  const { data, isLoading, isSuccess } = useMovies();
  const [favoriteList, setFavoriteList] = useState([]);

  const onFavorite = (movie) => {
    setFavoriteList([...favoriteList, movie]);
    storeData([...favoriteList, movie]);
  };
  

  const onRemoveFavorite = (movie) => {
    const filteredList = favoriteList.filter((item) => item.id !== movie.id);
    setFavoriteList(filteredList);
    storeData(filteredList);
  };

  const ifExists = (movie) => {
    if (favoriteList.filter((item) => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  const storeData = async (movie) => {
    try {
      const jsonValue = JSON.stringify(movie)
      await AsyncStorage.setItem('movies', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search Movies" />
      </View>

      <View>
        {isLoading && (
          <ActivityIndicator size={70} animating={true} color={Colors.red800} />
        )}

        {isSuccess && (
          <View style={styles.movieListCard}>
            <FlatList
              data={data?.results}
              numColumns={2}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => (
                <Card elevation={5} style={styles.card}>
                  <TouchableOpacity
                    onPress={() => navigation.push("Movie", { movie: item })}
                  >
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                      }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={() =>
                        ifExists(item)
                          ? onRemoveFavorite(item)
                          : onFavorite(item)
                      }
                    >
                      <MaterialIcons
                        name={ifExists(item) ? "favorite" : "favorite-outline"}
                        size={32}
                        color={"red"}
                      />
                    </TouchableOpacity>
                    <Card.Content style={styles.cardcontent}>
                      <Title>{item.title}</Title>
                      <Paragraph>{item.release_date}</Paragraph>
                    </Card.Content>
                  </TouchableOpacity>
                </Card>
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    margin: 5,
    padding: 5,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 5,
  },
  cover: {
    padding: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    opacity: 0.8,
  },
  cardcontent: {
    flex: 1,
    padding: 10,
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
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  movieListCard: {
    top: screen.height * 0.05,
  },
});
