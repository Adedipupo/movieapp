import React,{ useState} from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import useMovies from "../../../services/useMovies";
import { MovieInfoCard } from "../components/MovieCard";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import ImageCarousel from "../../../components/Carousel";
import { MaterialIcons } from "@expo/vector-icons";

const data: ImageCarouselItem[] = [
  {
    id: 0,
    uri: "https://picsum.photos/200",
    title: "Dahlia",
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 1,
    uri: "https://picsum.photos/300",
    title: "Sunflower",
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 2,
    uri: "https://picsum.photos/400",
    title: "Zinnia",
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 3,
    uri: "https://picsum.photos/500",
    title: "Tulip",
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 4,
    uri: "https://picsum.photos/600",
    title: "Chrysanthemum",
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 5,
    uri: "https://picsum.photos/700",
    title: "Hydrangea",
  }, // https://unsplash.com/photos/coIBOiWBPjk
];

export const HomeScreen = ({ navigation }) => {
  const { data, isLoading, isSuccess } = useMovies();
  const [favouriteList,setFavoriteList] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search Movies" />
      </View>
      {/* <View>
            <ImageCarousel data={data} />
        </View> */}
      <View>
        {isLoading && (
          <ActivityIndicator size={70} animating={true} color={Colors.red800} />
        )}

        {isSuccess && (
          <>
            <FlatList
              data={data?.results}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => (
                  <Card elevation={5} style={styles.card}>
                      <TouchableOpacity
                        onPress={() => navigation.push("Movie", { movie: item })}
                      >
                      <Image
                      source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                      style={styles.image}
                      resizeMode='cover'
                    />
                      <TouchableOpacity
                      style={styles.icon}
                      onPress={() => null}
                    >
                      <MaterialIcons
                        name={'favorite-outline'}
                        size={32}
                        color={'red'}
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
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    opacity: 0.8
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
    position: 'absolute',
    top: 10,
    right: 10
  }
});
