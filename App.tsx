import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./src/features/movies/screens/Homescreen";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from "./src/features/navigation/Main";
import { SearchScreen } from "./src/features/movies/screens/SearchScreen";
import { FavoritesScreen } from "./src/features/movies/screens/FavoriteScreen";


function BonusScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize:20,color:'tomato'}}>Bonus Coming soon!</Text>
      <Image 
        source={{uri: 'http://www.clicktorelease.com/code/gif/1.gif'}}  
        style={{width: 100, height:100 }} 
    />
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
            <Tab.Screen options={{headerShown: false}} name="Home" component={Main} />
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
