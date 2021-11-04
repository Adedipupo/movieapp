import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./src/features/movies/screens/Homescreen";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from "./src/features/navigation/Main";



function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>favourites!</Text>
    </View>
  );
}
function BonusScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bonus!</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}
function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Bonus: "md-gift",
  Favorites: "md-heart",
  Search: "md-search",
  User: "md-person",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const queryClient = new QueryClient();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Bonus" component={BonusScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
          </Tab.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
