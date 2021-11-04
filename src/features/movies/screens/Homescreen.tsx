import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import useMovies from "../../../services/useMovies";
import { MovieInfoCard } from "../components/MovieCard";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import ImageCarousel from "../../../components/Carousel";

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

const LeftContent = (props) => <Avatar.Icon {...props} icon="heart" />;
export const HomeScreen = ({ navigation }) => {

  const { data, isLoading, isSuccess } = useMovies();
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
                <TouchableOpacity
                  onPress={() => navigation.push("Movie", { movie: item })}
                >
                  <Card elevation={5} style={styles.card}>
                    <Card.Cover
                      style={styles.cover}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                      }}
                    />
                    <Card.Content style={styles.cardcontent}>
                      <Card.Title
                        onPress={() => {
                          null;
                        }}
                        title={item.title}
                        subtitle={item.release_date}
                        right={LeftContent}
                      />
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
